import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotContainNullValidator } from "./cannot-contain-null.validator";

export function cannotContainNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotContainNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
