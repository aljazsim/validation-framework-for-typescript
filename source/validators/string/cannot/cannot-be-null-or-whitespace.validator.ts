import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isNullOrWhiteSpace } from "defensive-programming-framework";

/**
 * The cannot be null or a whitespace string validator.
 *
 * @export
 * @class CannotBeNullOrWhitespaceValidator
 * @extends {Validator}
 */
export class CannotBeNullOrWhitespaceValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeNullOrWhitespaceValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (1)

    /**
     * Validates the specified value.
     *
     * @param {*} value
     * @returns {boolean} - True if the value is valid; false otherwise.
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return false;
        }
        else if (typeof value === "string")
        {
            return !isNullOrWhiteSpace(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (2)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
     */
    protected getDefaultMessage(): string
    {
        return "Value cannot be null or white space.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     */
    protected getDefaultMessageKey(): string
    {
        return "CannotBeNullOrWhitespace";
    }

    // #endregion
}
