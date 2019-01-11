import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeValidator } from "./must-be.validator";

export function valueMustBe(func: (value: any) => boolean, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeValidator(func, message, messageKey, validationLevel, validationContext, validationPriority));
}
