import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLongerThanOrEqualToValidator } from "./cannot-be-longer-than-or-equal-to.validator";

export function cannotBeLongerThanOrEqualTo(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLongerThanOrEqualToValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
