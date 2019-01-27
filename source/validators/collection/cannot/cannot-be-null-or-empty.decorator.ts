import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeNullOrEmptyValidator } from "./cannot-be-null-or-empty.validator";

/**
 * Validates that the value is not null or empty.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function cannotBeNullOrEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeNullOrEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
