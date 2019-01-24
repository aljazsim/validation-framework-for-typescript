import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidDateValidator } from "./must-be-valid-date.validator";

export function mustBeValidDate(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidDateValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
