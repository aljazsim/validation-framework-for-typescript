import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTodayValidator } from "./cannot-be-today.validator";

export function cannotBeToday(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeTodayValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
