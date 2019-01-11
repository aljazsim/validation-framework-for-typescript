import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeNullValidator } from "./must-be-null.validator";

export function mustBeNull(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeNullValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
