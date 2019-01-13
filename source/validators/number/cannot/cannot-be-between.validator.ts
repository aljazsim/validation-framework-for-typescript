import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isBetween, isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class CannotBeBetweenValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minValue: number | string, public maxValue: number | string, public inclusive: boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(minValue);
        cannotBeNull(maxValue);
        cannotBeNull(inclusive);

        if (isTypeOf(minValue, "string"))
        {
            mustBeTypeOf(maxValue, "string");
        }
        else if (isTypeOf(minValue, "number"))
        {
            mustBeTypeOf(maxValue, "number");
        }
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        if (this.inclusive)
        {
            return "Value cannot be between {0} and {1} (inclusive).";
        }
        else
        {
            return "Value cannot be between {0} and {1}.";
        }
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeBetween";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isBetween(value, this.minValue, this.maxValue, this.inclusive);
        }
    }

    // #endregion
}
