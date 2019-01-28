import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The cannot be a date (without a time component) validator.
 *
 * @export
 * @class CannotBeDateValidator
 * @extends {Validator}
 */
export class CannotBeDateValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of CannotBeDateValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeDateValidator
     */
    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        let date: Date;

        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Date)
        {
            date = <Date>value;

            return !(date.getHours() === 0 &&
                date.getMinutes() === 0 &&
                date.getSeconds() === 0 &&
                date.getMilliseconds() === 0);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (2)

    protected getDefaultMessage(): string
    {
        return "Value cannot be a date without time.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeDate";
    }

    // #endregion
}
