import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotMatchValidator } from "./cannot-match.validator";

export function cannotMatch(regex: RegExp, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotMatchValidator(regex, message, messageKey, validationLevel, validationContext, validationPriority));
}
