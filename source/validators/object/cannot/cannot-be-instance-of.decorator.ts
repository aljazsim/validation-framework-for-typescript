import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeInstanceOfValidator } from "./cannot-be-instance-of.validator";

export function cannotBeInstanceOf(type: Function, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeInstanceOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
