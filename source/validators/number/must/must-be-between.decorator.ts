import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeBetweenValidator } from "./must-be-between.validator";

export function mustBeBetween(minValue: number | string, maxValue: number | string, inclusive: boolean = true, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeBetweenValidator(minValue, maxValue, inclusive, message, messageKey, validationLevel, validationContext, validationPriority));
}
