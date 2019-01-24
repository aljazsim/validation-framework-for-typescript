import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeOneOfValidator } from "./cannot-be-one-of.validator";

export function cannotBeOneOf(set: any[], message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeOneOfValidator(set, message, messageKey, validationLevel, validationContext, validationPriority));
}
