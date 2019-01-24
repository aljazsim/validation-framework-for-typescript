import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateValidator } from "./cannot-be-date.validator";

export function cannotBeDate(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeDateValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
