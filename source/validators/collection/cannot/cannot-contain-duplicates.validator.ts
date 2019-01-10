import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsDuplicates, isNull } from "defensive-programming-framework";

export class CannotContainDuplicatesValidator extends Validator
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
        return "Value cannot contain duplicated.";
    }

    public getDefaultMessageKey(): string
    {
        return "CannotContainDuplicates";
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else
        {
            return containsDuplicates(value);
        }
    }

    // #endregion
}
