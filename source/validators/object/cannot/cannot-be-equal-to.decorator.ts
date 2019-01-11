import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEqualToValidator } from "./cannot-be-equal-to.validator";

export function cannotBeEqualTo(value: any, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEqualToValidator(value, message, messageKey, validationLevel, validationContext, validationPriority));
}
