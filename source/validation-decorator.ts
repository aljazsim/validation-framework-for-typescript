import { Validation } from "./validation";
import { Validator } from "./validators/validator";

/**
     * Gets the validation decorator.
     *
     * @static
     * @param {Validator} validator - The validator instance.
     * @returns - The validation decorator instance.
     */
export function getValidationDecorator(validator: Validator)
{
    let validatorKey = Validation.getValidatorKey(validator.constructor.name);

    return (target: Object, propertyKey: string) => Reflect.defineMetadata(validatorKey, validator, target, propertyKey);
}
