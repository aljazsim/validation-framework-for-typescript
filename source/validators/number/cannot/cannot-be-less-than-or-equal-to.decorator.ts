import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanOrEqualToValidator } from "./cannot-be-less-than-or-equal-to.validator";

/**
 * Validates that the value is not less than or equal to the specified limit.
 *
 * @export
 * @param {(number | string)} minValue - The minimum value.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeLessThanOrEqualTo(minValue: number | string, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLessThanOrEqualToValidator(minValue, message, validationLevel, validationContext, validationPriority));
}
