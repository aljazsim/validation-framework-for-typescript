import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidUrlValidator } from "./cannot-be-valid-url.validator";

export function valueCannotBeValidUrl(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeValidUrlValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
