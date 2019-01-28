import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanValidator } from "./cannot-be-less-than.validator";

/**
 * Validates that the value is not less than the specified limit.
 *
 * @export
 * @param {(number | string)} minValue - The minimum value.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 * @returns
 */
export function cannotBeLessThan(minValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLessThanValidator(minValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
