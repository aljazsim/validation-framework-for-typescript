import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeShorterThanOrEqualToValidator } from "./must-be-shorter-than-or-equal-to.validator";

/**
 * Validates that the value is shorter than or equal to the specified length.
 *
 * @export
 * @param {number} maxLength - The maximum length.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function mustBeShorterThanOrEqualTo(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeShorterThanOrEqualToValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
