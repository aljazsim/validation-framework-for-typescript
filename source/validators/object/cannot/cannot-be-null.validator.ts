import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "util";

export class CannotBeNullValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string, messageKey: string, validationLevel: ValidationLevel, public validationContext: string, validationPriority: number)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    public getDefaultMessage(): string
    {
        return "Value cannot be null.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotBeNull";
    }

    public isValid(value: any): boolean
    {
        return !isNull(value);
    }

    // #endregion
}
