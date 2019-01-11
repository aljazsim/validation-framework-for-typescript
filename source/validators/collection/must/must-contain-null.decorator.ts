import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainNullValidator } from "./must-contain-null.validator";

export function mustContainNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
