import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualToArray, isNull } from "defensive-programming-framework";

export class CannotBeEqualTo2Validator<T> extends Validator
{
    // #region Constructors (1)

    constructor(public array: Array<T>, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(array);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be equal to {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeEqualTo";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return !isEqualToArray(<Array<T>>value, this.array);
        }
    }

    // #endregion
}
