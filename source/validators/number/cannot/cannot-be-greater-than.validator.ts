import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isGreaterThan, isNull } from "defensive-programming-framework";

/**
 * The cannot be greater than validator.
 *
 * @export
 * @class CannotBeGreaterThanValidator
 * @extends {Validator}
 */
export class CannotBeGreaterThanValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxValue: number | string, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(maxValue);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value cannot be greater than {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeGreaterThan";
    }

    protected getMessageParameters()
    {
        return [this.maxValue];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            if (typeof this.maxValue === "string")
            {
                return !isGreaterThan(value, this.maxValue);
            }
            else
            {
                return true;
            }
        }
        else if (typeof value === "number")
        {
            if (typeof this.maxValue === "number")
            {
                return !isGreaterThan(value, this.maxValue);
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
