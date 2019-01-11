import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeIntegerValidator } from "./must-be-integer.validator";

export function valueMustBeBetween(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
