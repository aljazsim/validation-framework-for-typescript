import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The cannot be a valid float number string validator.
 *
 * @export
 * @class CannotBeValidFloatValidator
 * @extends {Validator}
 */
export class CannotBeValidFloatValidator extends Validator
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
        return "Value cannot be a valid decimal number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeValidFloat";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return isNaN(Number.parseFloat(<string>value));
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
