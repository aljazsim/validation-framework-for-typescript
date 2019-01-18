import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

export class CannotBeValidDateValidator extends Validator
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
        return "Value cannot be a valid date.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeValidDate";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return isNaN(Date.parse(<string>value));
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
