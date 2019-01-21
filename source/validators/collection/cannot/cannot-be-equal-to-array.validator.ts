import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualToArray, isNull } from "defensive-programming-framework";

export class CannotBeEqualToArrayValidator<T> extends Validator
{
    // #region Constructors (1)

    constructor(public readonly array: Array<T>, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(array);
    }

    // #endregion

    // #region Public Methods (1)

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (value instanceof Array)
        {
            return !isEqualToArray(<Array<T>>value, this.array);
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
        return "Value cannot be equal to {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotBeEqualToArray";
    }

    protected getMessageParameters()
    {
        return [this.array];
    }

    // #endregion
}