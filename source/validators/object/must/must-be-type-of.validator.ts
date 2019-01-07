import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isTypeOf } from "defensive-programming-framework";
import { isNull } from "util";

export class MustBeTypeOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public type: any, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(type);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be type of {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeTypeOf";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isTypeOf(value, this.type);
        }
    }

    public getMessageParameters()
    {
        return [this.type];
    }

    // #endregion
}
