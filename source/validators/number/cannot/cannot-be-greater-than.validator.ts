import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThan, isNull } from "defensive-programming-framework";

export class CannotBeGreaterThanValidator extends Validator
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
        return "Value cannot be greater than {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeGreaterThan";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isGreaterThan(value, this.maxValue);
        }
    }

    // #endregion
}
