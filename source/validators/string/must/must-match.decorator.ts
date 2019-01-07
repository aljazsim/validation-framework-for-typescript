import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustMatchValidator } from "./must-match.validator";

export function valueMustMatch(regex: RegExp, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustMatchValidator(regex, message, messageKey, validationLevel, validationContext, validationPriority));
}
