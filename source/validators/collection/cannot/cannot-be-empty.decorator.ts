import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEmptyValidator } from "./cannot-be-empty.validator";

export function valueCannotBeEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
