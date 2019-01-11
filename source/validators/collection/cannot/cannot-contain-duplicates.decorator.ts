import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotContainDuplicatesValidator } from "./cannot-contain-duplicates.validator";

export function cannotContainDuplicates(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotContainDuplicatesValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
