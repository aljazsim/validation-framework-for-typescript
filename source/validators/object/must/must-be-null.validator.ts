import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { isNull } from "defensive-programming-framework";

/**
 * The must be null validator.
 *
 * @export
 * @class MustBeNullValidator
 * @extends {Validator}
 */
export class MustBeNullValidator extends Validator
{
    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);
    }

    // #endregion

    // #region Public Methods (3)

    protected getDefaultMessage(): string
    {
        return "Value must be null.";
    }

    protected getDefaultMessageKey(): string
    {
        return "MustBeNull";
    }

    public isValid(value: any): boolean
    {
        return isNull(value);
    }

    // #endregion
}
