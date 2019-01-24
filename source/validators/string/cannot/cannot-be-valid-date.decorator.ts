import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidDateValidator } from "./cannot-be-valid-date.validator";

export function cannotBeValidDate(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeValidDateValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
