import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

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
        return "Value must be a valid integer number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeValidInteger";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (new RegExp("^-?[0-1]+$").test(value))
            {
                return !isNaN(Number.parseInt(<string>value, 10));
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
