import "reflect-metadata";
import { ValidatorError } from "./errors/validator-error";
import { IValidatable } from "./ivalidatable";
import { Validation } from "./validation";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";
import { ValidationMessage } from "./validation-message";
import { Validator } from "./validators/validator";
import { cannotBeNull, cannotBeNullOrEmpty, isNull, isNullOrEmpty, whenIsNull } from "defensive-programming-framework";

export abstract class ValidatableExtensions
{
    // #region Public Static Methods (2)

    public static isValid(validationSource: IValidatable, propertyName?: string, validationContexts?: string[])
    {
        cannotBeNull(validationSource);

        if (isNullOrEmpty(propertyName))
        {
            return !ValidatableExtensions.validateObject(validationSource, whenIsNull(validationContexts, [])).some(x => x.validationLevel === ValidationLevel.error);
        }
        else
        {
            return !ValidatableExtensions.validateProperty(validationSource, propertyName, whenIsNull(validationContexts, [])).some(x => x.validationLevel === ValidationLevel.error);
        }
    }

    public static validate(validationSource: IValidatable, propertyName?: string, validationContexts?: string[]): ValidationMessage[]
    {
        cannotBeNull(validationSource);

        if (isNull(propertyName))
        {
            return ValidatableExtensions.validateObject(validationSource, whenIsNull(validationContexts, []));
        }
        else
        {
            return ValidatableExtensions.validateProperty(validationSource, propertyName, whenIsNull(validationContexts, []));
        }
    }

    // #endregion

    // #region Private Static Methods (4)

    private static getValidators(validationSource: IValidatable, propertyName: string): Validator[]
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        return Reflect.getMetadataKeys(validationSource, propertyName)
            .filter(x => typeof (x) === "string" && Validation.isValidValidatorKey(x))
            .map(x => Reflect.getMetadata(x, validationSource, propertyName))
            .sort((a, b) => b.validationPriority - a.validationPriority);
    }

    private static validateValidators(validationSource: IValidatable, propertyName: string, propertyValue: any, validationContext: string): ValidationMessage[]
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        const messages: ValidationMessage[] = [];
        let isValid = false;

        for (const validator of ValidatableExtensions.getValidators(validationSource, propertyName))
        {
            if (validator.validationContext === validationContext)
            {
                try
                {
                    isValid = validator.isValid(propertyValue);
                }
                catch (ex)
                {
                    throw new ValidatorError("Unhandled validation error occurred.", typeof validator, typeof validationSource, propertyName, ex);
                }

                if (!isValid)
                {
                    messages.push(new ValidationMessage(validator.messageKey, validator.message, validator.messageParameters, validationSource, propertyName, validator.validationLevel, validator.validationContext, validator.validationPriority));
                }
            }
        }

        return messages;
    }

    private static validateObject(validationSource: IValidatable, validationContexts: string[])
    {
        cannotBeNull(validationSource);

        let messages: ValidationMessage[] = [];
        const propertyNames = Object.getOwnPropertyNames(validationSource);

        for (const propertyName of propertyNames)
        {
            messages = messages.concat(ValidatableExtensions.validateProperty(validationSource, propertyName, validationContexts));
        }

        return messages;
    }

    private static validateProperty(validationSource: IValidatable, propertyName, validationContexts: string[]): ValidationMessage[]
    {
        cannotBeNull(validationSource);
        cannotBeNullOrEmpty(propertyName);

        let messages: ValidationMessage[] = [];
        let propertyValue: any;

        const propertyNames = Object.getOwnPropertyNames(validationSource);

        if (propertyNames.some(x => x === propertyName))
        {
            propertyValue = Reflect.get(validationSource, propertyName);

            validationContexts = validationContexts;
            validationContexts.push(ValidationContext.default); // add default context
            validationContexts = validationContexts.filter((value, index, self) => self.indexOf(value) === index); // distinct

            for (const validationContext of validationContexts)
            {
                messages = messages.concat(ValidatableExtensions.validateValidators(validationSource, propertyName, propertyValue, validationContext));
            }
        }

        return messages;
    }

    // #endregion
}
