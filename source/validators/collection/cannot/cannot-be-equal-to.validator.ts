import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualTo2, isNull } from "defensive-programming-framework";

export class CannotBeEqualToValidator<T> extends Validator
{
    // #region Constructors (1)

    constructor(public array: Array<T>, message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
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
            return isEqualTo2(<Array<T>>value, this.array);
        }
    }

    // #endregion
}
