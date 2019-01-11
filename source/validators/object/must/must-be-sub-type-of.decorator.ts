import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeSubTypeOfValidator } from "./must-be-sub-type-of.validator";

export function mustBeSubTypeOf(type: any, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeSubTypeOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
