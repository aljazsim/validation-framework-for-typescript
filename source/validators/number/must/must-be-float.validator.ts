import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isFloat, isNull, isTypeOf, mustBeInteger } from "defensive-programming-framework";

export class MustBeFloatValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxDecimalPlaces: number | null | undefined, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(maxDecimalPlaces);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be precise to {0} decimal places.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBePreciseToDecimalPlaces";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isNull(this.maxDecimalPlaces))
        {
            return true;
        }
        else if (isTypeOf(value, "number"))
        {
            return isFloat(value, this.maxDecimalPlaces);
        }
        else
        {
            return true;
        }
    }

    public getMessageParameters()
    {
        return [this.maxDecimalPlaces];
    }

    // #endregion
}
