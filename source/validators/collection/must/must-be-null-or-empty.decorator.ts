import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeNullOrEmptyValidator } from "./must-be-null-or-empty.validator";

export function mustBeNullOrEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeNullOrEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
