import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEmpty, isEmptyArray, isNull } from "defensive-programming-framework";

/**
 * The cannot be empty validator.
 *
 * @export
 * @class CannotBeEmptyValidator
 * @extends {Validator}
 */
export class CannotBeEmptyValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeEmptyValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
    */
    constructor(message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);
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
            return true;
        }
        else if (typeof value === "string")
        {
            return !isEmpty(value);
        }
        else if (value instanceof Array)
        {
            return !isEmptyArray(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (1)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
    */
    protected getDefaultMessage(): string
    {
        return "Value cannot be empty.";
    }

    // #endregion
}
