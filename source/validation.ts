import { Validator } from "./validators/validator";
import { cannotBeNullOrEmpty, isNullOrEmpty } from "defensive-programming-framework";

export class Validation
{
    // #region Properties (1)

    private static readonly validationKeyRoot = "validation-framework";

    // #endregion

    // #region Public Static Methods (2)

    public static getValidatorKey(validatorName: string)
    {
        cannotBeNullOrEmpty(validatorName);

        return `${Validation.validationKeyRoot}:${validatorName}`;
    }

    public static isValidValidatorKey(namespace: string)
    {
        if (isNullOrEmpty(namespace))
        {
            return false;
        }
        else
        {
            return namespace.startsWith(Validation.validationKeyRoot);
        }
    }

    public static getValidationDecorator(validator: Validator)
    {
        let validatorKey = Validation.getValidatorKey(validator.getDefaultMessageKey());

        return (target: Object, propertyKey: string) => Reflect.defineMetadata(validatorKey, validator, target, propertyKey);
    }

    // #endregion
}
