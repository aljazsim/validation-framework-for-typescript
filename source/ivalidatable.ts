import { ValidationMessageCollection } from "./validation-message-collection";

/**
 * The validtable interface.
 *
 * @export
 * @interface IValidatable
 */
export interface IValidatable
{
    // #region Methods (3)

    /**
     * Gets the currently active validation contexts.
     *
     * @returns {string[]} - The currently active validation contexts.
     */
    getActiveValidationContexts(): string[];

    /**
    * Checks if the specified property is valid. If no property name is provided, all properties are checked.
    *
    * @param {string} [propertyName] - The property name.
    * @returns {boolean} - True if the value is valid; false otherwise.
    */
    isValid(propertyName?: string): boolean;

    /**
     * Validates the specified property. If no property name is provided, all properties are checked.
     *
     * @param {string} [propertyName] - The property name.
     * @returns {ValidationMessageCollection} - The list of validation messages.
     */
    validate(propertyName?: string): ValidationMessageCollection;

    // #endregion
}
