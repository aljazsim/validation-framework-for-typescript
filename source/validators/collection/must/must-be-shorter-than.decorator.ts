import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeShorterThanValidator } from "./must-be-shorter-than.validator";

/**
 * Validates that the value is shorter than the specified length.
 *
 * @export
 * @param {number} maxLength - The max length.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator
 */
export function MustBeShorterThan(maxLength: number, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeShorterThanValidator(maxLength, message, validationLevel, validationContext, validationPriority));
}
