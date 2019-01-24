import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLowerCaseValidator } from "./must-be-lower-case.validator";

export function mustBeLowerCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLowerCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
