import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainValidator } from "./must-contain.validator";

/**
* Validates that all array items return true when evaluated by the specified evaluator function.
 *
 * @export
 * @param {(T: any) => boolean} func - The evaluator function.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustContain(func: (T: any) => boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainValidator(func, message, messageKey, validationLevel, validationContext, validationPriority));
}
