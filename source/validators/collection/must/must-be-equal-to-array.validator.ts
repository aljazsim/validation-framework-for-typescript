import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualToArray, isNull } from "defensive-programming-framework";

/**
 * The must be equal to array validator.
 *
 * @export
 * @class MustBeEqualToArrayValidator
 * @extends {Validator}
 * @template T
 */
export class MustBeEqualToArrayValidator<T> extends Validator
{
    // #region Constructors (1)

    constructor(public array: Array<T>, public ignoreOrder: boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
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
     * @memberof MustBeEqualToArrayValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return isEqualToArray(<Array<T>>value, this.array, this.ignoreOrder);
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
     * @memberof MustBeEqualToArrayValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value must be equal to {0}.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof MustBeEqualToArrayValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "MustBeEqualToArray";
    }

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     * @memberof MustBeEqualToArrayValidator
     */
    protected getMessageParameters()
    {
        return [this.array];
    }

    // #endregion
}
