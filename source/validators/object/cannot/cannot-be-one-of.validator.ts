import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isEqualTo, isNull } from "defensive-programming-framework";

export class CannotBeOneOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public set: any[], message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(set);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be one of: {0}.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeOneOf";
    }

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

    public getMessageParameters()
    {
        return [this.set.join(", ")];
    }

    // #endregion
}
