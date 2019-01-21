import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeShorterThanValidator } from "./cannot-be-Shorter-than.validator";

export function validateCannotBeShorterThan(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeShorterThanValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}