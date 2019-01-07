import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";


export function valueCannotBeUpperCase(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeUpperCaseValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
