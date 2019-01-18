import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeTypeOf } from "defensive-programming-framework";

export class MustBeValidIntegerValidator extends Validator
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
        return "Value must be a valid integer.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeValidInteger";
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
            return !isNaN(Number.parseInt(<string>value, 10));
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
