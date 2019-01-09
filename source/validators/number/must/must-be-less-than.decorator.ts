import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLessThanValidator } from "./must-be-less-than.validator";

export function valueMustBeLessThan(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLessThanValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
