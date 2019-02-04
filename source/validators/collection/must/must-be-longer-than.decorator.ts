import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLongerThanValidator } from "./must-be-longer-than.validator";

/**
 * Validates that the value is longer than the specified length.
 *
 * @export
 * @param {number} minLength - The minimum length.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustBeLongerThan(minLength: number, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustBeLongerThanValidator(minLength, message, validationLevel, validationContext, validationPriority));
}
