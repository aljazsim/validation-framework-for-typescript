import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeLongerThanValidator } from "./cannot-be-longer-than.validator";

export function cannotBeLongerThan(maxLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeLongerThanValidator(maxLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
