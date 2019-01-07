import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLowerCaseValidator } from "./must-be-lower-case.validator";

export function valueMustBeLowerCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLowerCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
