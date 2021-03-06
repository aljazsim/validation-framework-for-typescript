import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeBetweenValidator } from "./cannot-be-between.validator";

/**
 * Validates that the value is not within the specified range.
 *
 * @export
 * @param {(number | string)} minValue - The minimum value.
 * @param {(number | string)} maxValue - The maximum value.
 * @param {boolean} [inclusive=true] - When true, the range is inclusive (the limits are included within the range).
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeBetween(minValue: number | string, maxValue: number | string, inclusive: boolean = true, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeBetweenValidator(minValue, maxValue, inclusive, message, validationLevel, validationContext, validationPriority));
}
