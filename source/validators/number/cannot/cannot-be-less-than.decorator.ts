import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanValidator } from "./cannot-be-less-than.validator";

export function cannotBeLessThan(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLessThanValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
