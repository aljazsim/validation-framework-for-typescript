import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeIntegerValidator } from "./cannot-be-integer.validator";

export function valueCannotBeInteger(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
