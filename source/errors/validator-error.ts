/**
 * The Validator error.
 *
 * @export
 * @class ValidatorError
 * @extends {Error}
 */
export class ValidatorError extends Error
{
    // #region Constructors (1)

    /**
	 * Creates an instance of ValidatorError.
	 * @param {string} errorMessage
     */
    constructor(errorMessage: string, public validatorDecoratorType: string, public validatorSourceType: string, public propertyName: string, public innerError: Error)
    {
        super(errorMessage);

        Object.setPrototypeOf(this, ValidatorError.prototype);
    }

    // #endregion
}
