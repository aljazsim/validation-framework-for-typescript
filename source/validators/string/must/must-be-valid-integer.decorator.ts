import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidIntegerValidator } from "./must-be-valid-integer.validator";

export function valueMustBeValidInteger(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
