/**
 * The Validation error.
 *
 * @export
 * @class ValidationError
 * @extends {Error}
 */
export class ValidationError extends Error
{
    /**
	 * Creates an instance of ValidationError.
	 * @param {string} errorMessage
	 * @memberof FooError
	 */
    constructor(errorMessage: string)
    {
        super(errorMessage);

        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
