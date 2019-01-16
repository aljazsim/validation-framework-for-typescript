import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeTypeOfValidator } from "./cannot-be-type-of.validator";

export function cannotBeTypeOf(type: string, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeTypeOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
