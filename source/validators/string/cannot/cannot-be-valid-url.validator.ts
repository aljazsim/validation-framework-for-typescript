import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

let URL = require("url").URL;

/**
 * The cannot be a valid URL string validator.
 *
 * @export
 * @class CannotBeValidUrlValidator
 * @extends {Validator}
 */
export class CannotBeValidUrlValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be a valid URL.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeValidUrl";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            try
            {
                let url = new URL(<string>value);

                return false;
            }
            catch (ex)
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
