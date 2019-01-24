import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainDuplicatesValidator } from "./must-contain-duplicates.validator";

export function mustContainDuplicates(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainDuplicatesValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
