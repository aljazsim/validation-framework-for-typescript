import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeBetweenValidator } from "./cannot-be-between.validator";

export function valueCannotBeBetween(minValue: number | string, maxValue: number | string, inclusive: boolean = true, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeBetweenValidator(minValue, maxValue, inclusive, message, messageKey, validationLevel, validationContext, validationPriority));
}
