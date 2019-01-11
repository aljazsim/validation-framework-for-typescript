import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeNullOrEmptyValidator } from "./must-be-null-or-empty.validator";

export function valueMustBeNullOrEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeNullOrEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
