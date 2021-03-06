import "reflect-metadata";
import { ValidatorError } from "./errors/validator-error";
import { IValidatable } from "./ivalidatable";
import { Validation } from "./validation";
import { ValidationContext } from "./validation-context";
import { ValidationMessage } from "./validation-message";
import { ValidationMessageCollection } from "./validation-message-collection";
import { Validator } from "./validators/validator";
import { cannotBeNull, cannotBeNullOrEmpty, isNull, whenIsNull, whenIsNullOrWhiteSpace } from "defensive-programming-framework";

/**
 * The validatable extensions.
 *
 * @export
 * @abstract
 * @class ValidatableExtensions
 */
export abstract class ValidatableExtensions
{
    // #region Public Static Methods (2)

    /**
    * Validates the specified property for the specified validation source. If no property name is provided, all properties are validated.
    *
    * @param {string} [propertyName] - The validation source.
    * @param {string} [propertyName] - The property name.
    * @param {string[]} [validationContexts] - The validation contexts.
    * @returns {ValidationMessageCollection} - The validation messages.
    */
    public static validate(validationSource: IValidatable, propertyName?: string, validationContexts?: string[])
    {
        cannotBeNull(validationSource);

        propertyName = <string>whenIsNullOrWhiteSpace(propertyName, null);
        validationContexts = <string[]>whenIsNull(validationContexts, []);

        if (isNull(propertyName))
        {
            return ValidatableExtensions.validateObject(validationSource, validationContexts);
        }
        else
        {
            return ValidatableExtensions.validateProperty(validationSource, propertyName, validationContexts);
        }
    }

    // #endregion

    // #region Private Static Methods (4)

    /**
     * Get the list of validators for the specified property in the specified validation source.
     *
     * @private
     * @static
     * @param {IValidatable} validationSource- The validation source.
     * @param {string} propertyName - The property name.
     * @returns {Validator[]} - The list of validators.
     */
    private static getValidators(validationSource: IValidatable, propertyName: string)
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        return <Validator[]>Reflect.getMetadataKeys(validationSource, propertyName)
            .filter(x => typeof (x) === "string" && Validation.isValidValidatorKey(x))
            .map(x => Reflect.getMetadata(x, validationSource, propertyName));
    }

    /**
     * Validates the validators for the specified property, property value and validation context in the specified validation source.
     *
     * @private
     * @static
     * @param {IValidatable} validationSource - The validation source.
     * @param {string} propertyName - The property name.
     * @param {*} propertyValue - The property value.
     * @param {(string | null)} validationContext - The validation context.
     * @returns {ValidationMessageCollection} - The validation messages.
     */
    private static validateValidators(validationSource: IValidatable, propertyName: string, propertyValue: any, validationContext: string | null)
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        let validationMessages = [];
        let isValid = false;

        for (let validator of ValidatableExtensions.getValidators(validationSource, propertyName))
        {
            if (validator.validationContext === validationContext)
            {
                try
                {
                    isValid = validator.isValid(propertyValue);
                }
                catch (ex)
                {
                    throw new ValidatorError("Unhandled validator error occurred.", typeof validator, typeof validationSource, propertyName, ex);
                }

                if (!isValid)
                {
                    validationMessages.push(new ValidationMessage(validator.message, validationSource, propertyName, validator.validationLevel, validator.validationContext, validator.validationPriority));
                }
            }
        }

        return new ValidationMessageCollection(validationMessages);
    }

    /**
     * Validates the specified validation source for the specified validation contexts.
     *
     * @private
     * @static
     * @param {IValidatable} validationSource - The validation source.
     * @param {string[]} validationContexts- The validation contexts.
     * @returns - The validation messages.
     */
    private static validateObject(validationSource: IValidatable, validationContexts: string[])
    {
        cannotBeNull(validationSource);

        let validationMessages = [];
        let propertyNames = Object.keys(validationSource);

        for (let propertyName of propertyNames)
        {
            for (let message of ValidatableExtensions.validateProperty(validationSource, propertyName, validationContexts).toArray())
            {
                validationMessages.push(message);
            }
        }

        return new ValidationMessageCollection(validationMessages);
    }

    /**
     * Validates the specified property in the specified validation source for the specified validation contexts.
     *
     * @private
     * @static
     * @param {IValidatable} validationSource - The validation source.
     * @param {string} propertyName - The property name.
     * @param {((string | null)[])} validationContexts - The validation contexts.
     * @returns {ValidationMessageCollection} - The validation messages.
     */
    private static validateProperty(validationSource: IValidatable, propertyName: string, validationContexts: (string | null)[])
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        let validationMessages = [];
        let propertyValue: any;

        let propertyNames = Object.getOwnPropertyNames(validationSource);

        if (propertyNames.some(x => x === propertyName))
        {
            propertyValue = Reflect.get(validationSource, propertyName);

            validationContexts = validationContexts;
            validationContexts.push(ValidationContext.default); // add default context
            validationContexts = validationContexts.filter((value, index, self) => self.indexOf(value) === index); // distinct

            for (let validationContext of validationContexts)
            {
                for (let message of ValidatableExtensions.validateValidators(validationSource, propertyName, propertyValue, validationContext).toArray())
                {
                    validationMessages.push(message);
                }
            }
        }

        return new ValidationMessageCollection(validationMessages);
    }

    // #endregion
}
