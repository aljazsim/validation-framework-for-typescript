import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeIntegerValidator } from "./must-be-integer.validator";

export function mustBeInteger(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
