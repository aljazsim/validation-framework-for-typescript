import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, is } from "defensive-programming-framework";

export class MustBeValidator extends Validator
{
    // #region Constructors (1)

    constructor(public func: (value: any) => boolean, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be equal the result of the expression.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBe";
    }

    public isValid(value: any): boolean
    {
        return is(value, this.func);
    }

    // #endregion
}
