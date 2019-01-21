import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeEqualToArrayValidator } from "./must-be-equal-to-array.validator";

export function mustBeEqualToArray<T>(array: Array<T>, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeEqualToArrayValidator(array, message, messageKey, validationLevel, validationContext, validationPriority));
}
