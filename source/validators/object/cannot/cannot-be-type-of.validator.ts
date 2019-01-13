import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isTypeOf } from "defensive-programming-framework";
import { isNull } from "defensive-programming-framework";

export class CannotBeTypeOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public type: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(type);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be type of {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeTypeOf";
    }

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

    public getMessageParameters()
    {
        return [this.type];
    }

    // #endregion
}
