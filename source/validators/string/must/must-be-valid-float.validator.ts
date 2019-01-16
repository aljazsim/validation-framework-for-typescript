import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class MustBeValidFloatValidator extends Validator
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
        return "Value must be a valid decimal number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeValidFloat";
    }

    public isValid(value: any): boolean
    {
        mustBeTypeOf(value, "string");

        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return Number.parseFloat(<string>value) !== NaN;
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
