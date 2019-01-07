import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeNullValidator } from "./cannot-be-null.validator";

export function valueCannotBeNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
