import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isInteger, isNull, isTypeOf } from "defensive-programming-framework";

/**
 * The cannot be an integer number validator.
 *
 * @export
 * @class CannotBeIntegerValidator
 * @extends {Validator}
 */
export class CannotBeIntegerValidator extends Validator
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
        return "Value cannot be an integer number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeInteger";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "number"))
        {
            return !isInteger(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
