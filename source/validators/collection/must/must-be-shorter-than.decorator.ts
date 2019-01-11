import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeShorterThanValidator } from "./must-be-shorter-than.validator";

export function validateMustBeShorterThan(minLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeShorterThanValidator(minLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
