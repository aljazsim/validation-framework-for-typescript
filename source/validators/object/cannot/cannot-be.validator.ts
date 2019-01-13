import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, is } from "defensive-programming-framework";

export class CannotBeValidator extends Validator
{
    // #region Constructors (1)

    constructor(public func: (value: any) => boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be equal the result of the expression.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBe";
    }

    public isValid(value: any): boolean
    {
        return !is(value, this.func);
    }

    // #endregion
}
