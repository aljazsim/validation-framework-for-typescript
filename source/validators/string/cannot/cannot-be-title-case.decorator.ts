import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTitleCaseValidator } from "./cannot-be-title-case.validator";

export function valueCannotBeTitleCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeTitleCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
