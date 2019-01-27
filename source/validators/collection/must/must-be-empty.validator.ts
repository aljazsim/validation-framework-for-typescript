import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEmpty, isEmptyArray, isNull } from "defensive-programming-framework";

/**
 * The must be empty validator.
 *
 * @export
 * @class MustBeEmptyValidator
 * @extends {Validator}
 */
export class MustBeEmptyValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustBeEmptyValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeEmptyValidator
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
     * @memberof MustBeEmptyValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return isEmpty(value);
        }
        else if (value instanceof Array)
        {
            return isEmptyArray(value);
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
     * @memberof MustBeEmptyValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value must be empty.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof MustBeEmptyValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "MustBeEmpty";
    }

    // #endregion
}
