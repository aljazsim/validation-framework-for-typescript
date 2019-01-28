import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsNull, isNull } from "defensive-programming-framework";

/**
 * The cannot contain null validator.
 *
 * @export
 * @class CannotContainNullValidator
 * @extends {Validator}
 */
export class CannotContainNullValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotContainNullValidator.
     * @param {boolean} ignoreOrder - When true, the order of the items is ignored.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotContainNullValidator
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
     * @memberof CannotContainNullValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return !containsNull(value);
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
     * @memberof CannotContainNullValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value cannot contain null.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof CannotContainNullValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "CannotContainNull";
    }

    // #endregion
}
