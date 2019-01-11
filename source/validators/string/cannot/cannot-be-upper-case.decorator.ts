import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeUpperCaseValidator } from "./cannot-be-upper-case.validator";

export function cannotBeUpperCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeUpperCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
