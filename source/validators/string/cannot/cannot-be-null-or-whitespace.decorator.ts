import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeNullOrWhitespaceValidator } from "./cannot-be-null-or-whitespace.validator";

export function cannotBeNullOrWhitespace(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeNullOrWhitespaceValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
