import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull, isTypeOf, mustBeTypeOf } from "defensive-programming-framework";

export class MustBeValidUrlValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value must be a valid URL.";
    }

    public getDefaultMessageKey(): string
    {
        return "MustBeValidUrl";
    }

    public isValid(value: any): boolean
    {
        mustBeTypeOf(value, "string");

        if (isNull(value))
        {
            return true;
        }
        else if (isTypeOf(value, "string"))
        {
            try
            {
                let url = new URL(<string>value);

                return true;
            }
            catch (ex)
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }

    // #endregion
}
