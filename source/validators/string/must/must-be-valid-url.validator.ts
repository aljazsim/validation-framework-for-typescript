import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";
import * as url from "url";

/**
 * The must be a valid URL string validator.
 *
 * @export
 * @class CannotBeValidUrlValidator
 * @extends {Validator}
 */
export class MustBeValidUrlValidator extends Validator
{
    // #region Constructors (1)

    /**
     * Creates an instance of MustBeValidUrlValidator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);
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
            try
            {
                let url2 = new url.URL(<string>value);

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

    // #region Protected Methods (1)

    /**
     * Gets the default message.
     *
     * @protected
     * @returns {string} - The default message.
     */
    protected getDefaultMessage(): string
    {
        return "Value must be a valid URL.";
    }

    // #endregion
}
