import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isNullOrWhiteSpace } from "defensive-programming-framework";

/**
 * The must be null or a whitespace string validator.
 *
 * @export
 * @class CannotBeNullOrWhitespaceValidator
 * @extends {Validator}
 */
export class MustBeNullOrWhitespaceValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustBeNullOrWhitespaceValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeNullOrWhitespaceValidator
     */
    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return isNullOrWhiteSpace(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (2)

    protected getDefaultMessage(): string
    {
        return "Value must be null or white space.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeNullOrWhitespace";
    }

    // #endregion
}
