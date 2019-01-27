import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEmptyValidator } from "./cannot-be-empty.validator";

/**
 * Validates that the value is not empty.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function cannotBeEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
