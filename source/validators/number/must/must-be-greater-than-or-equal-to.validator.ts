import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThanOrEqualTo, isNull } from "defensive-programming-framework";

export class MustBeGreaterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(minValue);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value must be greater than or equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeGreaterThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.minValue];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (typeof this.minValue === "string")
            {
                return isGreaterThanOrEqualTo(value, this.minValue);
            }
            else
            {
                return true;
            }
        }
        else if (typeof value === "number")
        {
            if (typeof this.minValue === "number")
            {
                return isGreaterThanOrEqualTo(value, this.minValue);
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
