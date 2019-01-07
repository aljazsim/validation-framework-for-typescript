import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidFloatValidator } from "./cannot-be-valid-float.validator";

export function valueCannotBeValidFloat(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeValidFloatValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
