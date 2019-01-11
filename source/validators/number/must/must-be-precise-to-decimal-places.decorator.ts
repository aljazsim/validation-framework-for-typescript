import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBePreciseToDecimalPlacesValidator } from "./must-be-precise-to-decimal-places.validator";

export function mustBePreciseToDecimalPlaces(decimalPlaces: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBePreciseToDecimalPlacesValidator(decimalPlaces, message, messageKey, validationLevel, validationContext, validationPriority));
}
