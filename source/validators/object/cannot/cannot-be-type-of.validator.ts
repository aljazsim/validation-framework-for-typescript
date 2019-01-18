import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isNull, isTypeOf } from "defensive-programming-framework";

export class CannotBeTypeOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public type: string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(type);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return !isTypeOf(value, this.type);
        }
    }

    // #endregion

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be type of {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeTypeOf";
    }

    protected getMessageParameters()
    {
        return [this.type];
    }

    // #endregion
}
