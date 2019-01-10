import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsNull, isNull } from "defensive-programming-framework";

export class CannotContainNullValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot contain null.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotContainNull";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return containsNull(value);
        }
    }

    // #endregion
}
