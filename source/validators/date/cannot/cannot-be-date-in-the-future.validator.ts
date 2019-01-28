import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The cannot be a date in the future validator.
 *
 * @export
 * @class CannotBeDateInTheFutureValidator
 * @extends {Validator}
 */
export class CannotBeDateInTheFutureValidator extends Validator
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
        return "Value cannot be a date in the future.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeDateInTheFuture";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Date)
        {
            return (<Date>value).getTime() <= new Date().getTime();
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
