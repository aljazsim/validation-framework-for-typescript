import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isNullOrEmpty, isNullOrEmptyArray } from "defensive-programming-framework";

export class CannotBeNullOrEmptyValidator extends Validator
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
        return "Value cannot be null or empty.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeNullOrEmpty";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return false;
        }
        else if (typeof value === "string")
        {
            return !isNullOrEmpty(value);
        }
        else if (value instanceof Array)
        {
            return !isNullOrEmptyArray(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
