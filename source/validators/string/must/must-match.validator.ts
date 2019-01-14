import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, doesMatch, isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class MustMatchValidator extends Validator
{
    // #region Constructors (1)

    constructor(public regex: RegExp, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must match {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustMatch";
    }

    public isValid(value: any): boolean
    {
        mustBeTypeOf(value, "string");

        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "string"))
        {
            return doesMatch(value, this.regex);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
