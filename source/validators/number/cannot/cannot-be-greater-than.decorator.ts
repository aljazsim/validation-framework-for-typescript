import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeGreaterThanValidator } from "./cannot-be-greater-than.validator";

export function cannotBeGreaterThan(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeGreaterThanValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
