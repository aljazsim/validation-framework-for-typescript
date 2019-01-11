import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeGreaterThanValidator } from "./must-be-greater-than.validator";

export function mustBeGreaterThan(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeGreaterThanValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
