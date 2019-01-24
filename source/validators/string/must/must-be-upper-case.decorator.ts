import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeUpperCaseValidator } from "./must-be-upper-case.validator";

export function mustBeUpperCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeUpperCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
