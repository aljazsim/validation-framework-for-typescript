import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainDuplicatesValidator } from "./must-contain-duplicates.validator";

export function valueMustContainDuplicates(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainDuplicatesValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
