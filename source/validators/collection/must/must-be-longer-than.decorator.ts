import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeLongerThanValidator } from "./must-be-longer-than.validator";

export function validateMustBeLongerThan(minLength: number, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeLongerThanValidator(minLength, message, messageKey, validationLevel, validationContext, validationPriority));
}
