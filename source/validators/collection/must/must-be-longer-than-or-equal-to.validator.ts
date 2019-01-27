import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

export class MustBeLongerThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxLength: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(maxLength);
        mustBeGreaterThanOrEqualTo(maxLength, 0);
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
            return (<string>value).length >= this.maxLength;
        }
        else if (value instanceof Array)
        {
            return (<Array<any>>value).length >= this.maxLength;
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
        return "Value must be longer than or equal to {0} items.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeLongerThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.maxLength];
    }

    // #endregion
}
