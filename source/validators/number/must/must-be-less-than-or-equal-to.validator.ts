import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThanOrEqualTo, isNull } from "defensive-programming-framework";

/**
 * The must be less than or equal to validator.
 *
 *
 * @export
 * @class MustBeLessThanOrEqualToValidator
 * @extends {Validator}
 */
export class MustBeLessThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustBeLessThanOrEqualToValidator.
     * @param {(number | string)} maxValue - The maximum value.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(public maxValue: number | string, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (1)

    /**
     * Validates the specified value.
     *
     * @param {*} value
     * @returns {boolean} - True if the value is valid; false otherwise.
     */
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
                return isLessThanOrEqualTo(value, this.maxValue);
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
                return isLessThanOrEqualTo(value, this.maxValue);
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

    // #region Protected Methods (2)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
     */
    protected getDefaultMessage(): string
    {
        return "Value must be less than or equal to {0}.";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters()
    {
        return [this.maxValue];
    }

    // #endregion
}
