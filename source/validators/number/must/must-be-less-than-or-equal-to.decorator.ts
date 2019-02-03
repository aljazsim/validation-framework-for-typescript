import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLessThanOrEqualToValidator } from "./must-be-less-than-or-equal-to.validator";

/**
 * Validates that the value is less than or equal to the specified limit.
 *
 * @export
 * @param {(number | string)} maxValue - The maximum value.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustBeLessThanOrEqualTo(maxValue: number | string, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLessThanOrEqualToValidator(maxValue, message, validationLevel, validationContext, validationPriority));
}
