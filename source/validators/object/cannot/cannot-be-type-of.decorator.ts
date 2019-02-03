import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTypeOfValidator } from "./cannot-be-type-of.validator";

/**
 * Validates that the value is not type of the specified type.
 *
 * @export
 * @param {string} type - The type to test against.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeTypeOf(type: string, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeTypeOfValidator(type, message, validationLevel, validationContext, validationPriority));
}
