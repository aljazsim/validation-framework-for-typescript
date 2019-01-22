import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeInstanceOfValidator } from "./must-be-instance-of.validator";

export function mustBeInstanceOf(type: Function, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeInstanceOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
