import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

export class CannotBeFloatValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxDecimalPlaces: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(maxDecimalPlaces);
        mustBeGreaterThanOrEqualTo(maxDecimalPlaces, 0);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value cannot be precise to {0} decimal places.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeFloat";
    }

    public getMessageParameters()
    {
        return [this.maxDecimalPlaces];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "number"))
        {
            let coefficient = Math.pow(10, this.maxDecimalPlaces);

            return <number>value !== Math.round(<number>value * coefficient) / coefficient;
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
