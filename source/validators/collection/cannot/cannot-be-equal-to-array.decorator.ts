import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeEqualToArrayValidator } from "./cannot-be-equal-to-array.validator";

export function cannotBeEqualToArray<T>(array: Array<T>, ignoreOrder: boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeEqualToArrayValidator(array, ignoreOrder, message, messageKey, validationLevel, validationContext, validationPriority));
}
