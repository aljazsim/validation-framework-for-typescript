import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, doesMatch, isNull } from "defensive-programming-framework";

export class MustMatchValidator extends Validator
{
    // #region Constructors (1)

    constructor(public regex: RegExp, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return doesMatch(value, this.regex);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must match {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustMatch";
    }

    protected getMessageParameters()
    {
        return [this.regex];
    }

    // #endregion
}
