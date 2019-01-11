import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeNullOrEmptyValidator } from "./cannot-be-null-or-empty.validator";

export function cannotBeNullOrEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeNullOrEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
