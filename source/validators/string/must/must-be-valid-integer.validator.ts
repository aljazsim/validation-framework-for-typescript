import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { mustBeTypeOf } from "defensive-programming-framework";
import { isNull } from "util";

export class MustBeValidIntegerValidator extends Validator
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
        return "Value must be a valid integer.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeValidInteger";
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
            return Number.parseInt(<string>value, 10) !== NaN;
        }
    }

    // #endregion
}
