import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsNull, isNull } from "defensive-programming-framework";

export class CannotContainNullValidator extends Validator
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
        return "Value cannot contain null.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotContainNull";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return !containsNull(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
