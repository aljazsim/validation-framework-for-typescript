import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEmpty, isNull } from "defensive-programming-framework";

export class CannotBeNullOrEmptyValidator extends Validator
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
        return "Value cannot be null or empty.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeNullOrEmpty";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isEmpty(value);
        }
    }

    // #endregion
}
