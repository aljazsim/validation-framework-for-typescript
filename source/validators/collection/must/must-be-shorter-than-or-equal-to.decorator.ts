import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeShorterThanOrEqualToValidator } from "./must-be-shorter-than-or-equal-to.validator";

export function mustBeShorterThanOrEqualTo(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeShorterThanOrEqualToValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
