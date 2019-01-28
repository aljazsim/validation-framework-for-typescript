import { toTitleCase } from "../../../utils/string-extensions";
import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * Must be a title case string validator.
 *
 * @export
 * @class CannotBeTitleCaseValidator
 * @extends {Validator}
 */
export class MustBeTitleCaseValidator extends Validator
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
        return "Value must be title case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeTitleCase";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
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
