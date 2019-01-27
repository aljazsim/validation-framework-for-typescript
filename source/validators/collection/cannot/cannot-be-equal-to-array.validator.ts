import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualToArray, isNull } from "defensive-programming-framework";

/**
 * The cannot be equal to array validator.
 *
 * @export
 * @class CannotBeEqualToArrayValidator
 * @extends {Validator}
 * @template T
 */
export class CannotBeEqualToArrayValidator<T> extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of CannotBeEqualToArrayValidator.
     * @param {Array<T>} array - The array to validate against.
     * @param {boolean} ignoreOrder - When true, the order of the items is ignored.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeEqualToArrayValidator
     */
    constructor(public readonly array: Array<T>, public readonly ignoreOrder: boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(array);
    }

    // #endregion

    // #region Public Methods (1)

    /**
     * Validates the specified value.
     *
     * @param {*} value
     * @returns {boolean} - True if the value is valid; false otherwise.
     * @memberof CannotBeEqualToArrayValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return !isEqualToArray(<Array<T>>value, this.array, this.ignoreOrder);
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
     * @memberof CannotBeEqualToArrayValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value cannot be equal to {0}.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof CannotBeEqualToArrayValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "CannotBeEqualToArray";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     * @memberof CannotBeEqualToArrayValidator
     */
    protected getMessageParameters()
    {
        return [this.array];
    }

    // #endregion
}
