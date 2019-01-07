import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, doesMatch, mustBeTypeOf } from "defensive-programming-framework";
import { isNull } from "util";

export class CannotMatchValidator extends Validator
{
    // #region Constructors (1)

    constructor(public regex: RegExp, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot match {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotMatch";
    }

    public isValid(value: any): boolean
    {
        mustBeTypeOf(value, "string");

        if (isNull(value))
        {
            return true;
        }
        else
        {
            return !doesMatch(value, this.regex);
        }
    }

    // #endregion
}
