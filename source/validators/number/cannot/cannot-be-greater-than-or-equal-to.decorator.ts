import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeGreaterThanOrEqualToValidator } from "./cannot-be-greater-than-or-equal-to.validator";

export function cannotBeGreaterThanOrEqualTo(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeGreaterThanOrEqualToValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
