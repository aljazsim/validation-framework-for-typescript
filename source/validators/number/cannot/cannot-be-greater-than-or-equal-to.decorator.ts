import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeGreaterThanOrEqualToValidator } from "./cannot-be-greater-than-or-equal-to.validator";

/**
 * Validates that the value is not greater than or equal to the specified limit.
 *
 * @export
 * @param {(number | string)} maxValue - The maximum value.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeGreaterThanOrEqualTo(maxValue: number | string, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeGreaterThanOrEqualToValidator(maxValue, message, validationLevel, validationContext, validationPriority));
}
