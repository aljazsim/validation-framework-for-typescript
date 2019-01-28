import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The must be a valid integer string validator.
 *
 * @export
 * @class CannotBeValidIntegerValidator
 * @extends {Validator}
 */
export class MustBeValidIntegerValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustBeValidIntegerValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeValidIntegerValidator
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
            if (new RegExp("^-?[0-1]+$").test(value))
            {
                return !isNaN(Number.parseInt(<string>value, 10));
            }
            else
            {
                return false;
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
        return "Value must be a valid integer number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeValidInteger";
    }

    // #endregion
}
