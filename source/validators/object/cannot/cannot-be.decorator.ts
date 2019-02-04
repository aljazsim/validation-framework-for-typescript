import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidator } from "./cannot-be.validator";

/**
 * Validates that the value returns false when evaluated by the specified evaluator function.
 *
 * @export
 * @param {(value: any) => boolean} func - The evaluator function.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBe(func: (value: any) => boolean, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeValidator(func, message, validationLevel, validationContext, validationPriority));
}
