import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTitleCaseValidator } from "./cannot-be-title-case.validator";

export function cannotBeTitleCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeTitleCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
