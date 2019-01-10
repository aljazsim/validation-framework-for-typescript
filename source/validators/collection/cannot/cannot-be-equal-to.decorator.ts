import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEqualToValidator } from "./cannot-be-equal-to.validator";

export function valueCannotBeEqualTo<T>(array: Array<T>, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEqualToValidator(array, message, messageKey, validationLevel, validationContext, validationPriority));
}
