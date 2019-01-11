import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateInThePastValidator } from "./cannot-be-date-in-the-past.validator";

export function cannotBeDateInThePast(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeDateInThePastValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
