import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isLessThan, isNull } from "defensive-programming-framework";

/**
 * The cannot be less than validator.
 *
 * @export
 * @class CannotBeLessThanValidator
 * @extends {Validator}
 */
export class CannotBeLessThanValidator extends Validator
{
    // #region Constructors (1)

    constructor(public readonly minValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(minValue);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value cannot be less than {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeLessThan";
    }

    protected getMessageParameters()
    {
        return [this.minValue];
    }

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
                return !isLessThan(value, this.minValue);
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
                return !isLessThan(value, this.minValue);
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
}
