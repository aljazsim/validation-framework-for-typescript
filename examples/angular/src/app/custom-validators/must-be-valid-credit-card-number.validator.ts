import { ValidationLevel, Validator } from "validation-framework-ts";

export class MustBeValidCreditCardNumberValidator extends Validator
{
    constructor(message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);
    }

    public isValid(value: any): boolean
    {
        return /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(value);
    }

    protected getDefaultMessage(): string
    {
        return "Value must be a valid credit card number.";
    }
}
