import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustContainValidator } from "./must-contain.validator";

export function mustContain(func: (T: any) => boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustContainValidator(func, message, messageKey, validationLevel, validationContext, validationPriority));
}
