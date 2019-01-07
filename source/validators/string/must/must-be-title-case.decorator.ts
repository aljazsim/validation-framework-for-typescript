import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeTitleCaseValidator } from "./must-be-title-case.validator";

export function valueMustBeTitleCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeTitleCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
