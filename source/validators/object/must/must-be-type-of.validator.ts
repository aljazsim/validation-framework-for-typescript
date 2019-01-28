import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isNull, isTypeOf } from "defensive-programming-framework";

/**
 * The must be type of validator.
 *
 * @export
 * @class MustBeTypeOfValidator
 * @extends {Validator}
 */
export class MustBeTypeOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public type: any, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(type);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be type of {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeTypeOf";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return isTypeOf(value, this.type);
        }
    }

    protected getMessageParameters()
    {
        return [this.type];
    }

    // #endregion
}
