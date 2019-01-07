import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeUpperCaseValidator } from "./must-be-upper-case.validator";

export function valueMustBeUpperCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeUpperCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
