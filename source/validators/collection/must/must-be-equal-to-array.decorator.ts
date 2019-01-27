import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeEqualToArrayValidator } from "./must-be-equal-to-array.validator";

export function mustBeEqualToArray<T>(array: Array<T>, ignoreOrder: boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeEqualToArrayValidator(array, ignoreOrder, message, messageKey, validationLevel, validationContext, validationPriority));
}
