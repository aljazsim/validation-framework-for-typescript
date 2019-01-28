import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualTo, isNull } from "defensive-programming-framework";

/**
 * The cannot be one of validator.
 *
 * @export
 * @class CannotBeOneOfValidator
 * @extends {Validator}
 */
export class CannotBeOneOfValidator extends Validator
{
    // #region Constructors (1)

    /**
     *Creates an instance of CannotBeOneOfValidator.
     * @param {any[]} set
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation message key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     * @memberof CannotBeOneOfValidator
     */
    constructor(public set: any[], message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(set);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return !this.set.some(x => isNull(x));
        }
        else
        {
            return !this.set.some(x => isEqualTo(x, value));
        }
    }

    // #endregion

    // #region Protected Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value cannot be one of: {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeOneOf";
    }

    protected getMessageParameters()
    {
        return [this.set];
    }

    // #endregion
}
