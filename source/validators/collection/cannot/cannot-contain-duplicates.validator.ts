import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { containsDuplicates, isNull } from "defensive-programming-framework";

export class CannotContainDuplicatesValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
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
            return !containsDuplicates(value);
        }
        else
        {
            return true;
        }
    }

    // #endregion

    // #region Protected Methods (2)

    protected getDefaultMessage(): string
    {
        return "Value cannot contain duplicates.";
    }

    protected getDefaultMessageKey(): string
    {
        return "CannotContainDuplicates";
    }

    // #endregion
}
