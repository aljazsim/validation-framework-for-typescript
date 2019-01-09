import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThanOrEqualTo, isNull } from "defensive-programming-framework";

export class MustBeGreaterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxValue: number | string, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be greater than or equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeGreaterThanOrEqualTo";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isGreaterThanOrEqualTo(value, this.maxValue);
        }
    }

    // #endregion
}
