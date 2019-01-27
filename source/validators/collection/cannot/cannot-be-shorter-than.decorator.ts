import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeShorterThanValidator } from "./cannot-be-shorter-than.validator";

export function cannotBeShorterThan(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeShorterThanValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
