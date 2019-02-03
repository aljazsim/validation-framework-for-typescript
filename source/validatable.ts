import { IValidatable } from "./ivalidatable";
import { ValidatableExtensions } from "./validatable-extensions";
import { ValidationMessageCollection } from "./validation-message-collection";

/**
 * The validation source base class.
 *
 * @export
 * @abstract
 * @class Validatable
 * @implements {IValidatable}
 */
export abstract class Validatable implements IValidatable
{
    // #region Public Methods (3)

    /**
     * Gets the currently active validation contexts.
     *
     * @returns {string[]} - The currently active validation contexts.
     */
    public getActiveValidationContexts(): string[]
    {
        return [];
    }

    /**
    * Checks if the specified property is valid. If no property name is provided, all properties are checked.
    *
    * @param {string} [propertyName] - The property name.
    * @returns {boolean} - True if the value is valid; false otherwise.
    */
    public isValid(propertyName?: string): boolean
    {
        return !this.validate(propertyName).hasErrors;
    }

    /**
     * Validates the specified property. If no property name is provided, all properties are checked.
     *
     * @param {string} [propertyName] - The property name.
     * @returns {ValidationMessageCollection} - The list of validation messages.
     */
    public validate(propertyName?: string): ValidationMessageCollection
    {
        let validationMessages = ValidatableExtensions.validate(this, propertyName, this.getActiveValidationContexts());

        return validationMessages;
    }

    // #endregion
}
