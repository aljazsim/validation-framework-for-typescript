import { ValidationLevel } from "../../../validation-level";
import { Validator } from "../../validator";
import { cannotBeNull, contains, isNull } from "defensive-programming-framework";

export class MustContainValidator extends Validator
{
	// #region Constructors (1)

	constructor(public func: (T: any) => boolean, message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, messageKey, validationLevel, validationContext, validationPriority);

        cannotBeNull(func);
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
            return contains(value, this.func);
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
        return "Value must contain the specified expression.";
    }

	protected getDefaultMessageKey(): string
    {
        return "MustContain";
    }

	// #endregion
}
