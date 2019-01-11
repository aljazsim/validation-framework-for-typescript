import "reflect-metadata";
import { Validation } from "../../../validation";
import { ValidationLevel } from "../../../validation-level";
import { MustBeOneOfValidator } from "./must-be-one-of.validator";

export function mustBeOneOf(set: any[], message?: string, messageKey?: string, validationLevel?: ValidationLevel, validationContext?: string, validationPriority?: number)
{
    return Validation.getValidationDecorator(new MustBeOneOfValidator(set, message, messageKey, validationLevel, validationContext, validationPriority));
}
