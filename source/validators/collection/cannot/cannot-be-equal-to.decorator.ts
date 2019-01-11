import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEqualTo2Validator } from "./cannot-be-equal-to.validator";

export function cannotBeEqualTo2<T>(array: Array<T>, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEqualTo2Validator(array, message, messageKey, validationLevel, validationContext, validationPriority));
}
