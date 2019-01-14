import { toTitleCase } from "../../../utils/string-extensions";
import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf } from "defensive-programming-framework";

export class MustBeTitleCaseValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be title case.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeTitleCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "string"))
        {
            return value === toTitleCase(<string>value);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
