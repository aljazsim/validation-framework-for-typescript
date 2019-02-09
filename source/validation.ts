import "reflect-metadata";
import { cannotBeNullOrEmpty, isNullOrEmpty } from "defensive-programming-framework";

/**
 * The validation utility class.
 *
 * @export
 * @class Validation
 */
export abstract class Validation
{
    // #region Properties (1)

    /**
     * The validation decorator namespace prefix.
     *
     * @private
     * @static
     */
    private static readonly validationDecoratorNamespacePrefix = "validation-framework-ts";

    // #endregion

    // #region Public Static Methods (2)

    /**
     * Gets the validation decorator key.
     *
     * @static
     * @param {string} validatorName - The validator name.
     * @returns - The validator key.
     */
    public static getValidatorKey(validatorName: string)
    {
        cannotBeNullOrEmpty(validatorName);

        return `${Validation.validationDecoratorNamespacePrefix}:${validatorName}`;
    }

    /**
     * Check is the specified validation decorator namespace is valid.
     *
     * @static
     * @param {string} namespace - The validation decorator namespace.
     * @returns True when valid; false otherwise.
     */
    public static isValidValidatorKey(namespace: string)
    {
        if (isNullOrEmpty(namespace))
        {
            return false;
        }
        else
        {
            return namespace.startsWith(Validation.validationDecoratorNamespacePrefix);
        }
    }

    // #endregion
}
