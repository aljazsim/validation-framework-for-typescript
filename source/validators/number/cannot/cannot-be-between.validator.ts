import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isBetween, isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

/**
 * The cannot be between validator.
 *
 * @export
 * @class CannotBeBetweenValidator
 * @extends {Validator}
 */
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

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        if (this.inclusive)
        {
            return "Value cannot be between {0} and {1} inclusive.";
        }
        else
        {
            return "Value cannot be between {0} and {1}.";
        }
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeBetween";
    }

    protected getMessageParameters()
    {
        return [this.minValue, this.maxValue];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (isTypeOf(this.minValue, "string") &&
                isTypeOf(this.maxValue, "string"))
            {
                return !isBetween(value, this.minValue, this.maxValue, this.inclusive);
            }
        }
        else if (typeof value === "number")
        {
            if (isTypeOf(this.minValue, "number") &&
                isTypeOf(this.maxValue, "number"))
            {
                return !isBetween(value, this.minValue, this.maxValue, this.inclusive);
            }
        }

        return true;
    }

    // #endregion
}
