import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeGreaterThanOrEqualTo, mustBeInteger } from "defensive-programming-framework";

export class CannotBeShorterThanValidator extends Validator
{
    // #region Constructors (1)

    constructor(public minLength: number, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        mustBeInteger(minLength);
        mustBeGreaterThanOrEqualTo(minLength, 0);
    }

    // #endregion

    // #region Public Methods (4)

    public getDefaultMessage(): string
    {
        return "Value cannot have less than or equal to {0} items.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeLongerThan";
    }

    public getMessageParameters()
    {
        return [this.minLength];
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            if (isTypeOf(value, "string"))
            {
                return (<string>value).length >= this.minLength;
            }
            else if (isTypeOf(value, "array"))
            {
                return (<Array<any>>value).length >= this.minLength;
            }
            else
            {
                throw new Error("Value must be a string or an array.");
            }
        }
    }

    // #endregion
}
