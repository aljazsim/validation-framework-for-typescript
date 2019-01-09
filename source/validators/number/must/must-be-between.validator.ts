import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isBetween, isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class MustBeBetweenValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minValue: number | string, public maxValue: number | string, public inclusive: boolean, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
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
        }
        else
        {
        }
        return "Value must be between {0} and {1}.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeBetween";
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
