import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

export class CannotBeLowerCaseValidator extends Validator
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
        return "Value cannot be lower case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeLowerCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (new RegExp("[a-zA-Z]+").test(value))
            {
                return value !== (<string>value).toLowerCase();
            }
            else
            {
                return true;
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
