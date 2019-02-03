import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeOneOfValidator } from "./must-be-one-of.validator";

/**
 * Validates that the value is one of the specified values.
 *
 * @export
 * @param {any[]} set - The set of values.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustBeOneOf(set: any[], message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustBeOneOfValidator(set, message, validationLevel, validationContext, validationPriority));
}
