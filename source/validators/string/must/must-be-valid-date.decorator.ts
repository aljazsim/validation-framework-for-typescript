import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidDateValidator } from "./must-be-valid-date.validator";

export function valueMustBeValidDate(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidDateValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
