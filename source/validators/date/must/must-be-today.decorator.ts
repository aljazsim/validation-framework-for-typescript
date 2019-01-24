import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeTodayValidator } from "./must-be-today.validator";

export function mustBeToday(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeTodayValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
