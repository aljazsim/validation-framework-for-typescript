import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, is } from "defensive-programming-framework";

/**
 * The must be validator.
 *
 * @export
 * @class MustBeValidator
 * @extends {Validator}
 */
export class MustBeValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustBeValidator.
     * @param {(value: any) => boolean} func - The evaluator function.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(public func: (value: any) => boolean, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
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
        return is(value, this.func);
    }

    // #endregion

    // #region Protected Methods (1)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
     */
    protected getDefaultMessage(): string
    {
        return "Value must be equal to the result of the expression.";
    }

    // #endregion
}
