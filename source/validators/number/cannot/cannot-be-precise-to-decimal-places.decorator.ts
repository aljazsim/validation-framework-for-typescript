import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBePreciseToDecimalPlacesValidator } from "./cannot-be-precise-to-decimal-places.validator";

export function valueCannotBePreciseToDecimalPlaces(decimalPlaces: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBePreciseToDecimalPlacesValidator(decimalPlaces, message, messageKey, validationLevel, validationContext, validationPriority));
}
