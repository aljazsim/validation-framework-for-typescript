import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isInteger, isNull, isTypeOf } from "defensive-programming-framework";

/**
 * The must be an integer number validator.
 *
 * @export
 * @class MustBeIntegerValidator
 * @extends {Validator}
 */
export class MustBeIntegerValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustBeIntegerValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeIntegerValidator
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
        else if (isTypeOf(value, "number"))
        {
            return isInteger(value);
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
        return "Value must be an integer number.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeInteger";
    }

    // #endregion
}
