import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeGreaterThanOrEqualToValidator } from "./must-be-greater-than-or-equal-to.validator";

export function mustBeGreaterThanOrEqualTo(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeGreaterThanOrEqualToValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
