import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEqualTo } from "defensive-programming-framework";

/**
 * The cannot be equal to validator.
 *
 * @export
 * @class CannotBeEqualToValidator
 * @extends {Validator}
 */
export class CannotBeEqualToValidator extends Validator
{

    constructor(public value: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeEqualTo";
    }

    public isValid(value: any): boolean
    {
        return !isEqualTo(value, this.value);
    }

    // #endregion

    // #region Protected Methods (1)

    protected getMessageParameters(): any[]
    {
        return [this.value];
    }

    // #endregion
}
