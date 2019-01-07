import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { CannotBeSubTypeOfValidator } from "./cannot-be-sub-type-of.validator";

export function valueCannotBeSubTypeOf(type: any, message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new CannotBeSubTypeOfValidator(type, message, messageKey, validationLevel, validationContext, validationPriority));
}
