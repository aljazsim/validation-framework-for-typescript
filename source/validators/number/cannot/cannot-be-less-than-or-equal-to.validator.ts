import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThanOrEqualTo, isNull } from "defensive-programming-framework";

/**
 * The cannot be less than or equal to validator.
 *
 * @export
 * @class CannotBeLessThanOrEqualToValidator
 * @extends {Validator}
 */
export class CannotBeLessThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(minValue);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (typeof this.minValue === "string")
            {
                return !isLessThanOrEqualTo(value, this.minValue);
            }
            else
            {
                return true;
            }
        }
        else if (typeof value === "number")
        {
            if (typeof this.minValue === "number")
            {
                return !isLessThanOrEqualTo(value, this.minValue);
            }
            else
            {
                return true;
            }
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
        return "Value cannot be less than or equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeLessThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.minValue];
    }

    // #endregion
}
