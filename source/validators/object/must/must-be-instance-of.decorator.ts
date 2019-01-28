import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeInstanceOfValidator } from "./must-be-instance-of.validator";

/**
 * Validates that the value is an instance of the specified type.
 *
 * @export
 * @param {Function} type - The type to test against.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function mustBeInstanceOf(type: Function, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeInstanceOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
