import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanValidator } from "./cannot-be-Less-than.validator";

export function valueCannotBeLessThan(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLessThanValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
