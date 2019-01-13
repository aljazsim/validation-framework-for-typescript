import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEmpty, isNull } from "defensive-programming-framework";

export class CannotBeEmptyValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be empty.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeEmpty";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return !isEmpty(value);
        }
    }

    // #endregion
}
