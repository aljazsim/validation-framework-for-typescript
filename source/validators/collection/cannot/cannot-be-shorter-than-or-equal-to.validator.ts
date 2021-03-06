import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

/**
 * The cannot be shorter than or equal to validator.
 *
 * @export
 * @class CannotBeShorterThanOrEqualToValidator
 * @extends {Validator}
 */
export class CannotBeShorterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeShorterThanOrEqualToValidator.
     * @param {number} minLength - The minimum length.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(public minLength: number, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);

        mustBeInteger(minLength);
        mustBeGreaterThanOrEqualTo(minLength, 0);
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
            return (<string>value).length > this.minLength;
        }
        else if (value instanceof Array)
        {
            return (<Array<any>>value).length > this.minLength;
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
        return "Value cannot be shorter than or equal to {0} items.";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters()
    {
        return [this.minLength];
    }

    // #endregion
}
