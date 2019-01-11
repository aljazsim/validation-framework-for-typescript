import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeDateValidator } from "./must-be-date.validator";

export function mustBeDate(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeDateValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
