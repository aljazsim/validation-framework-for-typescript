import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsDuplicates, isNull } from "defensive-programming-framework";

/**
 * The cannot contain duplicates validator.
 *
 * @export
 * @class CannotContainDuplicatesValidator
 * @extends {Validator}
 */
export class CannotContainDuplicatesValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotContainDuplicatesValidator.
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
        else if (value instanceof Array)
        {
            return !containsDuplicates(value);
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
        return "Value cannot contain duplicates.";
    }

    // #endregion
}
