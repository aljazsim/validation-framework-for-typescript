import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTitleCaseValidator } from "./cannot-be-title-case.validator";

/**
 * Validates that the value is not a title case string.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeTitleCase(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeTitleCaseValidator(message, validationLevel, validationContext, validationPriority));
}
