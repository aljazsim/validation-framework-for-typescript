import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotContainValidator } from "./cannot-contain.validator";

/**
 * Validates that all array items return false when evaluated by the specified evaluator function.
 *
 * @export
 * @param {(T: any) => boolean} func - The evaluator function.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotContain(func: (T: any) => boolean, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotContainValidator(func, message, validationLevel, validationContext, validationPriority));
}
