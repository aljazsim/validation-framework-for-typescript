import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeEqualToValidator } from "./must-be-equal-to.validator";

export function mustBeEqualTo2<T>(array: Array<T>, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeEqualToValidator(array, message, messageKey, validationLevel, validationContext, validationPriority));
}
