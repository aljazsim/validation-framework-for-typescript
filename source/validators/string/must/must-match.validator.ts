import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, doesMatch, isNull } from "defensive-programming-framework";

/**
 * The must match a regular expression validator.
 *
 * @export
 * @class CannotMatchValidator
 * @extends {Validator}
 */
export class MustMatchValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of MustMatchValidator.
     * @param {RegExp} regex - The regular expression to test against.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof MustMatchValidator
     */
    constructor(public regex: RegExp, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
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
            return doesMatch(value, this.regex);
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
        return "Value must match {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustMatch";
    }

    protected getMessageParameters()
    {
        return [this.regex];
    }

    // #endregion
}
