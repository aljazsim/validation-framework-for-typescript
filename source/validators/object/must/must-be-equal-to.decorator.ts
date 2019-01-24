import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeEqualToValidator } from "./must-be-equal-to.validator";

export function mustBeEqualTo(value: any, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeEqualToValidator(value, message, messageKey, validationLevel, validationContext, validationPriority));
}
