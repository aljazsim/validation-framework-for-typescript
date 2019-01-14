import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, contains, isNull, isTypeOf } from "defensive-programming-framework";

export class MustContainValidator extends Validator
{
    // #region Constructors (1)

    constructor(public func: (T: any) => boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value Must contain the specified expression.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustContain";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "Array"))
        {
            return contains(value, this.func);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
