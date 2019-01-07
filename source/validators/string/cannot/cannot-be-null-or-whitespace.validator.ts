import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNullOrWhiteSpace, mustBeTypeOf } from "defensive-programming-framework";
import { isNull } from "util";

export class CannotBeNullOrWhitespaceValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be null or white space.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeNullOrWhitespace";
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
            return !isNullOrWhiteSpace(value);
        }
    }

    // #endregion
}
