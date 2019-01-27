import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

/**
 * The cannot be longer than oer equal to validator.
 *
 * @export
 * @class CannotBeLongerThanOrEqualToValidator
 * @extends {Validator}
 */
export class CannotBeLongerThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeLongerThanOrEqualToValidator.
     * @param {number} maxLength - The maximum length.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeLongerThanOrEqualToValidator
     */
    constructor(public maxLength: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(maxLength);
        mustBeGreaterThanOrEqualTo(maxLength, 0);
    }

    // #endregion

    // #region Public Methods (1)

    /**
     * Validates the specified value.
     *
     * @param {*} value
     * @returns {boolean} - True if the value is valid; false otherwise.
     * @memberof CannotBeLongerThanOrEqualToValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return (<string>value).length < this.maxLength;
        }
        else if (value instanceof Array)
        {
            return (<Array<any>>value).length < this.maxLength;
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
     * @memberof CannotBeLongerThanOrEqualToValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value cannot be longer than or equal to {0} items.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof CannotBeLongerThanOrEqualToValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "CannotBeLongerThanOrEqualTo";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     * @memberof CannotBeLongerThanOrEqualToValidator
     */
    protected getMessageParameters()
    {
        return [this.maxLength];
    }

    // #endregion
}
