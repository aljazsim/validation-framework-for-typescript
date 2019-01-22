import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThanOrEqualTo, isNull } from "defensive-programming-framework";

export class MustBeLessThanOrEqualToValidator extends Validator
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
        return "Value must be less than or equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeLessThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.maxValue];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (typeof this.maxValue === "string")
            {
                return isLessThanOrEqualTo(value, this.maxValue);
            }
            else
            {
                return true;
            }
        }
        else if (typeof value === "number")
        {
            if (typeof this.maxValue === "number")
            {
                return isLessThanOrEqualTo(value, this.maxValue);
            }
            else
            {
                return true;
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
