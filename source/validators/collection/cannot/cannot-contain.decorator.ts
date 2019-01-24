import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotContainValidator } from "./cannot-contain.validator";

export function cannotContain(func: (T: any) => boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotContainValidator(func, message, messageKey, validationLevel, validationContext, validationPriority));
}
