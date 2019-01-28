import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The must be upper case string validator.
 *
 * @export
 * @class CannotBeUpperCaseValidator
 * @extends {Validator}
 */
export class MustBeUpperCaseValidator extends Validator
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
        return "Value must be upper case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeUpperCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return value === (<string>value).toUpperCase();
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
