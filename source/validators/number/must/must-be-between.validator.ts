import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isBetween, isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

/**
 * The must be between validator.
 *
 * @export
 * @class MustBeBetweenValidator
 * @extends {Validator}
 */
export class MustBeBetweenValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustBeBetweenValidator.
     * @param {(number | string)} minValue - The minimum value.
     * @param {(number | string)} maxValue - The maximum value.
     * @param {boolean} inclusive - When true, the limits are included in the range.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(public minValue: number | string, public maxValue: number | string, public inclusive: boolean, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);

        cannotBeNull(minValue);
        cannotBeNull(maxValue);
        cannotBeNull(inclusive);

        if (isTypeOf(minValue, "string"))
        {
            mustBeTypeOf(maxValue, "string");
        }
        else if (isTypeOf(minValue, "number"))
        {
            mustBeTypeOf(maxValue, "number");
        }
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
            if (isTypeOf(this.minValue, "string") &&
                isTypeOf(this.maxValue, "string"))
            {
                return isBetween(value, this.minValue, this.maxValue, this.inclusive);
            }
        }
        else if (typeof value === "number")
        {
            if (isTypeOf(this.minValue, "number") &&
                isTypeOf(this.maxValue, "number"))
            {
                return isBetween(value, this.minValue, this.maxValue, this.inclusive);
            }
        }

        return true;
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
        if (this.inclusive)
        {
            return "Value must be between {0} and {1} inclusive.";
        }
        else
        {
            return "Value must be between {0} and {1}.";
        }
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters()
    {
        return [this.minValue, this.maxValue];
    }

    // #endregion
}
