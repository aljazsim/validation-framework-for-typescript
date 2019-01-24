import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateInTheFutureValidator } from "./cannot-be-date-in-the-future.validator";

export function cannotBeDateInTheFuture(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeDateInTheFutureValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
