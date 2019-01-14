import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeFloatValidator } from "./cannot-be-float.validator";

export function cannotBeFloat(maxDecimalPlaces: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeFloatValidator(maxDecimalPlaces, message, messageKey, validationLevel, validationContext, validationPriority));
}
