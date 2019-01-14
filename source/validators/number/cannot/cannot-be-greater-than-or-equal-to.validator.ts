import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThanOrEqualTo, isNull, isTypeOf } from "defensive-programming-framework";

export class CannotBeGreaterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (4)

    public getDefaultMessage(): string
    {
        return "Value cannot be greater than or equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeGreaterThanOrEqualTo";
    }

    public getMessageParameters()
    {
        return [this.maxValue];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "string") ||
            isTypeOf(value, "number"))
        {
            return isGreaterThanOrEqualTo(value, this.maxValue);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
