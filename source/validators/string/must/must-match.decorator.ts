import "reflect-metadata";
import { getValidationDecorator } from "../../../validation-decorator";
import { ValidationLevel } from "../../../validation-level";
import { MustMatchValidator } from "./must-match.validator";

/**
 * Validates that the value matches the specified regular expression.
 *
 * @export
 * @param {RegExp} regex - The regular expression to test against.
 * @param {string} [message] - The custom validation message.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function MustMatch(regex: RegExp, message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustMatchValidator(regex, message, validationLevel, validationContext, validationPriority));
}
