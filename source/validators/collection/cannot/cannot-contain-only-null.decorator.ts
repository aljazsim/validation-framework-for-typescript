import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotContainOnlyNullValidator } from "./cannot-contain-only-null.validator";

export function valueCannotContainOnlyNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotContainOnlyNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
