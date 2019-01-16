import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, doesMatch, isNull, isTypeOf } from "defensive-programming-framework";

export class CannotMatchValidator extends Validator
{
    // #region Constructors (1)

    constructor(public regex: RegExp, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot match {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotMatch";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return !doesMatch(<string>value, this.regex);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
