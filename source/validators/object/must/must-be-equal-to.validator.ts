import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEqualTo } from "defensive-programming-framework";

/**
 * The must be equal to validator.
 *
 * @export
 * @class MustBeEqualToValidator
 * @extends {Validator}
 */
export class MustBeEqualToValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustBeEqualToValidator.
     * @param {*} value - The value to test against.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(public value: any, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);
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
        return isEqualTo(value, this.value);
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
        return "Value must be equal to {0}.";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters()
    {
        return [this.value];
    }

    // #endregion
}
