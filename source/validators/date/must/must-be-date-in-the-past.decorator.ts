import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeDateInThePastValidator } from "./must-be-date-in-the-past.validator";

export function mustBeDateInThePast(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeDateInThePastValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
