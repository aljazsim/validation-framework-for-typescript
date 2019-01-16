import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEqualTo } from "defensive-programming-framework";

export class MustBeEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public value: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeEqualTo";
    }

    public isValid(value: any): boolean
    {
        return isEqualTo(value, this.value);
    }

    // #endregion
}
