import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { MustBeTypeOfValidator } from "./must-be-type-of.validator";

/**
 * Validates that the value is type of the specified type.
 *
 * @export
 * @param {string} type - The type to test against.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustBeTypeOf(type: any, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustBeTypeOfValidator(type, message, validationLevel, validationContext, validationPriority));
}
