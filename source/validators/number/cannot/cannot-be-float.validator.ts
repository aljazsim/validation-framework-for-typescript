import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isNull, isTypeOf, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

/**
 * The cannot be a float number validator.
 *
 * @export
 * @class CannotBeFloatValidator
 * @extends {Validator}
 */
export class CannotBeFloatValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeFloatValidator.
     * @param {number} maxDecimalPlaces
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
constructor(public maxDecimalPlaces: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
{
    super(message, messageKey, validationLevel, validationContext, validationPriority);

    cannotBeNull(maxDecimalPlaces);
    mustBeInteger(maxDecimalPlaces);
    mustBeGreaterThanOrEqualTo(maxDecimalPlaces, 0);
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
    else if (isTypeOf(value, "number"))
    {
        let coefficient = Math.pow(10, this.maxDecimalPlaces);

        return <number>value !== Math.round(<number>value * coefficient) / coefficient;
    }
    else
    {
        return true;
    }
}

    // #endregion

    // #region Protected Methods (3)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
     */
    protected getDefaultMessage(): string
{
    return "Value cannot be a float number precise to {0} decimal places.";
}

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     */
    protected getDefaultMessageKey(): string
{
    return "CannotBeFloat";
}

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters()
{
    return [this.maxDecimalPlaces];
}

    // #endregion
}
