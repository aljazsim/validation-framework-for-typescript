import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainOnlyNullValidator } from "./must-contain-only-null.validator";

export function mustContainOnlyNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainOnlyNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
