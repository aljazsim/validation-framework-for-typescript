import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeFloatValidator } from "./must-be-float.validator";

/**
 * Validates that the value is a float number precise to the specified number of decimal places.
 *
 * @export
 * @param {number} maxDecimalPlaces - The maximum number of decimal places.
 * @param {string} [message] - The custom validation message.
 * @param {string} [messageKey] - The custom validation message key.
 * @param {ValidationLevel} [validationLevel] - The custom validation level.
 * @param {(string | null)} [validationContext] - The custom validation context.
 * @param {number} [validationPriority] - The custom validation priority.
 * @returns - The decorator.
 */
export function mustBeFloat(maxDecimalPlaces?: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeFloatValidator(maxDecimalPlaces, message, messageKey, validationLevel, validationContext, validationPriority));
}
