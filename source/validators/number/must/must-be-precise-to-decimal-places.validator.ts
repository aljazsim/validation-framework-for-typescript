import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { mustBeInteger } from "defensive-programming-framework";
import { isNull } from "defensive-programming-framework";

export class MustBePreciseToDecimalPlacesValidator extends Validator
{
    // #region Constructors (1)

    constructor(public decimalPlaces: number, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(decimalPlaces);
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
        else
        {
            const coefficient = Math.pow(10, this.decimalPlaces);

            return <number>value === Math.round(<number>value * coefficient) / coefficient;
        }
    }

    // #endregion
}
