import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeDateInTheFutureValidator } from "./must-be-date-in-the-future.validator";

export function mustBeDateInTheFuture(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeDateInTheFutureValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
