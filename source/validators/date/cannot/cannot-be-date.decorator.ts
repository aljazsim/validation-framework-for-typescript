import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateValidator } from "./cannot-be-date.validator";

/**
 * Validates that the value is not a date without a time component.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeDate(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeDateValidator(message, validationLevel, validationContext, validationPriority));
}
