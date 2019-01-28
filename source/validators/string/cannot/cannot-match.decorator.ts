import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotMatchValidator } from "./cannot-match.validator";

/**
 * Validates that the value does not match the specified regular expression.
 *
 * @export
 * @param {RegExp} regex - The regular expression to test against.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function cannotMatch(regex: RegExp, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotMatchValidator(regex, message, messageKey, validationLevel, validationContext, validationPriority));
}
