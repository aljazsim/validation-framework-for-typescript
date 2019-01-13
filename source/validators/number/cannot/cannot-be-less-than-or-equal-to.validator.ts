import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThanOrEqualTo, isNull } from "defensive-programming-framework";

export class CannotBeLessThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be less than or equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeLessThanOrEqualTo";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isLessThanOrEqualTo(value, this.maxValue);
        }
    }

    // #endregion
}
