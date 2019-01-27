import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

export class MustBeShorterThanValidator extends Validator
{
    // #region Constructors (1)

    constructor(public maxLength: number, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(maxLength);
        mustBeGreaterThanOrEqualTo(maxLength, 0);
    }

    // #endregion

    // #region Public Methods (4)

    protected getDefaultMessage(): string
    {
        return "Value must be shorter than {0} items.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeShorterThan";
    }

    protected getMessageParameters()
    {
        return [this.maxLength];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return (<string>value).length < this.maxLength;
        }
        else if (value instanceof Array)
        {
            return (<Array<any>>value).length < this.maxLength;
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
