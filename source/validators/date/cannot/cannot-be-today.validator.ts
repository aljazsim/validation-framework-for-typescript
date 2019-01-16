import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class CannotBeTodayValidator extends Validator
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
        return "Value cannot be a today's date.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeToday";
    }

    public isValid(value: any): boolean
    {
        mustBeTypeOf(value, "date");

        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "Date"))
        {
            return (<Date>value).getDate() !== new Date().getDate();
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
