import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateInThePastValidator } from "./cannot-be-date-in-the-past.validator";

/**
 * Validates that the value is not a date in the past.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeDateInThePast(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeDateInThePastValidator(message, validationLevel, validationContext, validationPriority));
}
