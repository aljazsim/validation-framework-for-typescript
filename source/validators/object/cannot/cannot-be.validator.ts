import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, is } from "defensive-programming-framework";

/**
 * The cannot be validator.
 *
 * @export
 * @class CannotBeValidator
 * @extends {Validator}
 */
export class CannotBeValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of CannotBeValidator.
     * @param {(value: any) => boolean} func - The evaluator function.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeValidator
     */
    constructor(public func: (value: any) => boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        return !is(value, this.func);
    }

    // #endregion

    // #region Protected Methods (2)

    protected getDefaultMessage(): string
    {
        return "Value cannot be equal to the result of the expression.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBe";
    }

    // #endregion
}
