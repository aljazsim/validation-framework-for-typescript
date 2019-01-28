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

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be null or white space.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeNullOrWhitespace";
    }

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
}
