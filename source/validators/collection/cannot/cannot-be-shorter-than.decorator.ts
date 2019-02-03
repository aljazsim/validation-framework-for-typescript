import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeShorterThanValidator } from "./cannot-be-shorter-than.validator";

/**
 * Validates that the value is not shorter than the specified length.
 *
 * @export
 * @param {number} minLength - The minimum length.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator
 */
export function CannotBeShorterThan(minLength: number, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeShorterThanValidator(minLength, message, validationLevel, validationContext, validationPriority));
}
