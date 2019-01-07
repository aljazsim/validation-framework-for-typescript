import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidIntegerValidator } from "./cannot-be-valid-integer.validator";

export function valueCannotBeValidInteger(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeValidIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
