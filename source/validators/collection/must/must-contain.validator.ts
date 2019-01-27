import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, contains, isNull } from "defensive-programming-framework";

/**
 * The must contain validator.
 *
 * @export
 * @class MustContainValidator
 * @extends {Validator}
 */
export class MustContainValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustContainValidator.
     * @param {(T: any) => boolean} func - The evaluator function.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeEqualToArrayValidator
     */
    constructor(public func: (T: any) => boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
    }

    // #endregion

    // #region Public Methods (1)

    /**
     * Validates the specified value.
     *
     * @param {*} value
     * @returns {boolean} - True if the value is valid; false otherwise.
     * @memberof MustContainValidator
     */
    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return contains(value, this.func);
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
     * @memberof MustContainValidator
     */
    protected getDefaultMessage(): string
    {
        return "Value must contain the specified expression.";
    }

    /**
     * Gets the default message key.
     *
     * @protected
     * @returns {string} - The default message key.
     * @memberof MustContainValidator
     */
    protected getDefaultMessageKey(): string
    {
        return "MustContain";
    }

    // #endregion
}
