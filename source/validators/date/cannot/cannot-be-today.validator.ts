import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The cannot be today validator.
 *
 * @export
 * @class CannotBeTodayValidator
 * @extends {Validator}
 */
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
        return "Value cannot be today's date.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeToday";
    }

    public isValid(value: any): boolean
    {
        let today: Date;
        let date: Date;

        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Date)
        {
            today = new Date();
            today.setHours(0, 0, 0, 0);

            date = new Date(value);
            date.setHours(0, 0, 0, 0);

            return date.getTime() !== today.getTime();
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
