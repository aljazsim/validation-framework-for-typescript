import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isEqualTo } from "defensive-programming-framework";

export class MustBeEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public value: any, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeEqualTo";
    }

    public isValid(value: any): boolean
    {
        return isEqualTo(value, this.value);
    }

    // #endregion
}
