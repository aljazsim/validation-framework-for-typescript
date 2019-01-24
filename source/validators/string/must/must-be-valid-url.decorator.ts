import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidUrlValidator } from "./must-be-valid-url.validator";

export function mustBeValidUrl(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidUrlValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
