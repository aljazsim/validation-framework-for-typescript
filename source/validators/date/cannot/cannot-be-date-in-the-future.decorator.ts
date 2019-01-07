import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeDateInTheFutureValidator } from "./cannot-be-date-in-the-future.validator";

export function valueCannotBeDateInTheFuture(message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeDateInTheFutureValidator(message, messageKey, validationLevel, validationContext, validationPriority));
}
