import "reflect-metadata";
import { MustBeValidCreditCardNumberValidator } from "src/app/custom-validators/must-be-valid-credit-card-number.validator";
import { getValidationDecorator, ValidationLevel } from "validation-framework-ts";

/**
 * Validates that the value is a valid credit card number
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustBeValidCreditCardNumber(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustBeValidCreditCardNumberValidator(message, validationLevel, validationContext, validationPriority));
}
