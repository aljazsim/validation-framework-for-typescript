import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeNullOrWhitespaceValidator } from "./must-be-null-or-whitespace.validator";

export function mustBeNullOrWhiteSpace(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeNullOrWhitespaceValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
