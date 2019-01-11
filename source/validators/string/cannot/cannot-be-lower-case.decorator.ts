import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLowerCaseValidator } from "./cannot-be-lower-case.validator";

export function cannotBeLowerCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLowerCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
