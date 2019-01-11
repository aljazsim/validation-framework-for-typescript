import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeEmptyValidator } from "./must-be-empty.validator";

export function mustBeEmpty(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeEmptyValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
