import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLongerThanValidator } from "./cannot-be-longer-than.validator";

/**
 * Validates that the value is not longer than the specified length.
 *
 * @export
 * @param {number} maxLength - The maximum length.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeLongerThan(maxLength: number, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeLongerThanValidator(maxLength, message, validationLevel, validationContext, validationPriority));
}
