import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

export class CannotBeShorterThanOrEqualToValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minLength: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(minLength);
        mustBeGreaterThanOrEqualTo(minLength, 0);
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
            return (<string>value).length > this.minLength;
        }
        else if (value instanceof Array)
        {
            return (<Array<any>>value).length > this.minLength;
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
        return "Value cannot be shorter than or equal to {0} items.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeShorterThanOrEqualTo";
    }

    protected getMessageParameters()
    {
        return [this.minLength];
    }

    // #endregion
}