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
     *Creates an instance of MustBeEqualToValidator.
     * @param {*} value - The value to test against.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustBeEqualToValidator
     */
    constructor(public value: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        return isEqualTo(value, this.value);
    }

    // #endregion

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.value];
    }

    // #endregion
}
