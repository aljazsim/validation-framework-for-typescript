import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLessThanOrEqualToValidator } from "./must-be-less-than-or-equal-to.validator";

export function mustBeLessThanOrEqualTo(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLessThanOrEqualToValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
