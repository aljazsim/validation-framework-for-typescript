import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLongerThanOrEqualToValidator } from "./cannot-be-longer-than-or-equal-to.validator";

/**
 * Validates that the value is not longer than or equal to the specified length.
 *
 * @export
 * @param {number} maxLength - The maximum length.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeLongerThanOrEqualTo(maxLength: number, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeLongerThanOrEqualToValidator(maxLength, message, validationLevel, validationContext, validationPriority));
}
