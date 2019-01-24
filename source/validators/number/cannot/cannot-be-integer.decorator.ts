import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeIntegerValidator } from "./cannot-be-integer.validator";

export function cannotBeInteger(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeIntegerValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
