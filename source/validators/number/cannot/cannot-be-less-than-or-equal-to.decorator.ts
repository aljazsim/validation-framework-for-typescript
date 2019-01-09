import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLessThanOrEqualToValidator } from "./cannot-be-less-than-or-equal-to.validator";

export function valueCannotBeLessThanOrEqualTo(maxValue: number | string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLessThanOrEqualToValidator(maxValue, message, messageKey, validationLevel, validationContext, validationPriority));
}
