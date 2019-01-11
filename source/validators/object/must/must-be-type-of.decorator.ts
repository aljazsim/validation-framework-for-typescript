import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeTypeOfValidator } from "./must-be-type-of.validator";

export function mustBeTypeOf(type: any, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeTypeOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
