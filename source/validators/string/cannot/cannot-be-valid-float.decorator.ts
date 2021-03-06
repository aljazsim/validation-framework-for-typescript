import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidFloatValidator } from "./cannot-be-valid-float.validator";

/**
 * Validates that the value is not a valid float number string.
 *
 * @export
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeValidFloat(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeValidFloatValidator(message, validationLevel, validationContext, validationPriority));
}
