import { toTitleCase } from "../../../utils/string-extensions";
import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNullOrWhiteSpace } from "defensive-programming-framework";
import { isNull } from "util";

/**
 * Cannot be a title case string validator.
 *
 * @export
 * @class CannotBeTitleCaseValidator
 * @extends {Validator}
 */
export class CannotBeTitleCaseValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of CannotBeTitleCaseValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeTitleCaseValidator
     */
    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
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

    // #region Protected Methods (2)

    protected getDefaultMessage(): string
    {
        return "Value cannot be title case.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeTitleCase";
    }

    // #endregion
}
