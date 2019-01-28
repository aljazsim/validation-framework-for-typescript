import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The cannot be upper case string validator.
 *
 * @export
 * @class CannotBeUpperCaseValidator
 * @extends {Validator}
 */
export class CannotBeUpperCaseValidator extends Validator
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
        return "Value cannot be upper case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeUpperCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (new RegExp("[a-zA-Z]+").test(value))
            {
                return value !== (<string>value).toUpperCase();
            }
            else
            {
                return true;
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
