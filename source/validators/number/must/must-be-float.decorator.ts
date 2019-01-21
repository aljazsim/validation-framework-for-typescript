import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeFloatValidator } from "./must-be-float.validator";

export function mustBeFloat(maxDecimalPlaces?: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeFloatValidator(maxDecimalPlaces, message, messageKey, validationLevel, validationContext, validationPriority));
}