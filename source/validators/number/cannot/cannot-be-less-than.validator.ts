import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThan, isNull, isTypeOf } from "defensive-programming-framework";

export class CannotBeLessThanValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value cannot be less than {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeLessThan";
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
        else if (typeof value === "string" ||
            isTypeOf(value, "number"))
        {
            return isLessThan(value, this.maxValue);
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
