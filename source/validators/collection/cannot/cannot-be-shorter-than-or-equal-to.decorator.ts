import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeShorterThanOrEqualToValidator } from "./cannot-be-shorter-than-or-equal-to.validator";

export function cannotBeShorterThanOrEqualTo(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeShorterThanOrEqualToValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
