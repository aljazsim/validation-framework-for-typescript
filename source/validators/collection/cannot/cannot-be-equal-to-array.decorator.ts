import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEqualToArrayValidator } from "./cannot-be-equal-to-array.validator";

/**
 * Validates that the value is not equal to the specified array.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} array - The array to validate against.
 * @param {boolean} ignoreOrder - When true, the order of the items is ignored.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function CannotBeEqualToArray<T>(array: Array<T>, ignoreOrder: boolean, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new CannotBeEqualToArrayValidator(array, ignoreOrder, message, validationLevel, validationContext, validationPriority));
}
