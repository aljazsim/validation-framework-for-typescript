import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeValidator } from "./cannot-be.validator";

export function cannotBe(func: (value: any) => boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeValidator(func, message, messageKey, validationLevel, validationContext, validationPriority));
}
