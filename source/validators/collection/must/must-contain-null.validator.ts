import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsNull, isNull } from "defensive-programming-framework";

/**
 * The must contain null validator.
 *
 * @export
 * @class MustContainNullValidator
 * @extends {Validator}
 */
export class MustContainNullValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustContainNullValidator.
     * @param {boolean} ignoreOrder - When true, the order of the items is ignored.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustContainNullValidator
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
     * @memberof MustContainNullValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return containsNull(value);
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
     * @memberof MustContainNullValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value must contain null.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof MustContainNullValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "MustContainNull";
    }

    // #endregion
}
