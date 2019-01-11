import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidFloatValidator } from "./must-be-valid-float.validator";

export function mustBeValidFloat(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidFloatValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
