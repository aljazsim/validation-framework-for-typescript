import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEqualTo } from "defensive-programming-framework";

export class CannotBeEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public value: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeEqualTo";
    }

    public isValid(value: any): boolean
    {
        return !isEqualTo(value, this.value);
    }

    // #endregion
}
