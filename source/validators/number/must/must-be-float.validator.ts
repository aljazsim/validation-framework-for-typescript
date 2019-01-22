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

    // #region Public Methods (1)

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

    // #endregion

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be a float number precise to {0} decimal places.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeFloat";
    }

    protected getMessageParameters()
    {
        return [this.maxDecimalPlaces];
    }

    // #endregion
}
