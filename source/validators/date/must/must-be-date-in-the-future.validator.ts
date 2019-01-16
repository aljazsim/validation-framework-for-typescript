import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class MustBeDateInTheFutureValidator extends Validator
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
        return "Value must be a date in the future.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeDateInTheFuture";
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
            return <Date>value > new Date();
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
