import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanValidator } from "./cannot-be-less-than.validator";

/**
 * Validates that the value is not less than the specified limit.
 *
 * @export
 * @param {(number | string)} minValue - The minimum value.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeLessThan(minValue: number | string, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeLessThanValidator(minValue, message, validationLevel, validationContext, validationPriority));
}
