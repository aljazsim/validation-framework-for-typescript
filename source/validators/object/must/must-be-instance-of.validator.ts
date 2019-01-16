import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, isNull } from "defensive-programming-framework";

export class MustBeInstanceOfValidator extends Validator
{
    // #region Constructors (1)

    constructor(public type: Function, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(type);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be Instance of {0}.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeInstanceOf";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return value instanceof this.type;
        }
    }

    public getMessageParameters()
    {
        return [this.type];
    }

    // #endregion
}
