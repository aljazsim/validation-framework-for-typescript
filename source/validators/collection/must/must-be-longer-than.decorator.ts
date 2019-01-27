import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLongerThanValidator } from "./must-be-longer-than.validator";

/**
 * Validates that the value is longer than the specified length.
 *
 * @export
 * @param {number} minLength - The minimum length.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function mustBeLongerThan(minLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLongerThanValidator(minLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
