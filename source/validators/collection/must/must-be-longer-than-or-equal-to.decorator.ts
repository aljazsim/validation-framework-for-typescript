import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLongerThanOrEqualToValidator } from "./must-be-longer-than-or-equal-to.validator";

export function mustBeLongerThanOrEqualTo(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLongerThanOrEqualToValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
