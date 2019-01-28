import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isNull, isTypeOf, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

/**
 * The cannot be a float number validator.
 *
 * @export
 * @class CannotBeFloatValidator
 * @extends {Validator}
 */
export class CannotBeFloatValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxDecimalPlaces: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxDecimalPlaces);
        mustBeInteger(maxDecimalPlaces);
        mustBeGreaterThanOrEqualTo(maxDecimalPlaces, 0);
    }

    // #endregion

    // #region Public Methods (1)

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

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be a float number precise to {0} decimal places.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeFloat";
    }

    protected getMessageParameters()
    {
        return [this.maxDecimalPlaces];
    }

    // #endregion
}
