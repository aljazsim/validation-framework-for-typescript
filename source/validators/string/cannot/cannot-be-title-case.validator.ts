import { toTitleCase } from "../../../utils/string-extensions";
import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNullOrWhiteSpace } from "defensive-programming-framework";
import { isNull } from "util";

export class CannotBeTitleCaseValidator extends Validator
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
        return "Value cannot be title case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeTitleCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (isNullOrWhiteSpace(value))
            {
                return true;
            }
            else
            {
                return value !== toTitleCase(<string>value);
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
