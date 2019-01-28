import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThanOrEqualTo, isNull } from "defensive-programming-framework";

/**
 * The cannot be greater than or equal to validator.
 *
 * @export
 * @class CannotBeGreaterThanOrEqualToValidator
 * @extends {Validator}
 */
export class CannotBeGreaterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of CannotBeGreaterThanOrEqualToValidator.
     * @param {(number | string)} maxValue - The maximum value.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeGreaterThanOrEqualToValidator
     */
    constructor(public maxValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
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
            if (typeof this.maxValue === "string")
            {
                return !isGreaterThanOrEqualTo(value, this.maxValue);
            }
            else
            {
                return true;
            }
        }
        else if (typeof value === "number")
        {
            if (typeof this.maxValue === "number")
            {
                return !isGreaterThanOrEqualTo(value, this.maxValue);
            }
            else
            {
                return true;
            }
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
        return "Value cannot be greater than or equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeGreaterThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.maxValue];
    }

    // #endregion
}
