import { ValidationLevel } from "./validation-level";
import { ValidationMessage } from "./validation-message";
import { cannotBeNullOrEmpty, mustBeInteger, whenIsNull } from "defensive-programming-framework";

/**
 * The validation message collection.
 *
 * @export
 * @class ValidationMessageCollection
 */
export class ValidationMessageCollection
{
    // #region Properties (1)

    /**
     * The validation messages.
     *
     * @private
     * @type {ValidationMessage[]}
     */
    private readonly validationMessages: ValidationMessage[] = [];

    // #endregion

    // #region Constructors (1)

    /**
     * Creates an instance of ValidationMessageCollection.
     * @param {ValidationMessage[]} validationMessages
     */
    constructor(validationMessages: ValidationMessage[])
    {
        this.validationMessages = <ValidationMessage[]>whenIsNull(validationMessages, []);
    }

    // #endregion

    // #region Public Accessors (8)

    /**
     * Gets the list of error validation messages.
     *
     * @readonly
     */
    public get errors()
    {
        return new ValidationMessageCollection(this.validationMessages.filter((x: ValidationMessage) => x.validationLevel === ValidationLevel.error));
    }

    /**
     * Gets the first validation message in the collection.
     *
     * @readonly
     */
    public get first()
    {
        return this.validationMessages.length > 0 ? this.validationMessages[0] : null;
    }

    /**
     * Checks if the collection contains any error validation messages.
     *
     * @returns {boolean}
     */
    public get hasErrors(): boolean
    {
        return this.validationMessages.some((x: ValidationMessage) => x.validationLevel === ValidationLevel.error);
    }

    /**
     * Checks if the collection contains any info validation messages.
     *
     * @returns {boolean}
     */
    public get hasInfos(): boolean
    {
        return this.validationMessages.some((x: ValidationMessage) => x.validationLevel === ValidationLevel.info);
    }

    /**
     * Checks if the collection contains any warning validation messages.
     *
     * @returns {boolean}
     */
    public get hasWarnings(): boolean
    {
        return this.validationMessages.some((x: ValidationMessage) => x.validationLevel === ValidationLevel.warning);
    }

    /**
     * Gets the list of all the info validation messages.
     *
     * @readonly
     */
    public get infos()
    {
        return new ValidationMessageCollection(this.validationMessages.filter((x: ValidationMessage) => x.validationLevel === ValidationLevel.info));
    }

    /**
     * Gets the length of all the validation messages.
     *
     * @readonly
     */
    public get length()
    {
        return this.validationMessages.length;
    }

    /**
     * Gets the list of all the warning validation messages.
     *
     * @readonly
     */
    public get warnings()
    {
        return new ValidationMessageCollection(this.validationMessages.filter((x: ValidationMessage) => x.validationLevel === ValidationLevel.warning));
    }

    // #endregion

    // #region Public Methods (4)

    /**
     * Filters validation messages by property name.
     *
     * @param {string} propertyName
     * @returns
     */
    public filter(propertyName: string)
    {
        cannotBeNullOrEmpty(propertyName);

        return new ValidationMessageCollection(this.validationMessages.filter((x, i, array) => x.propertyName === propertyName));
    }

    /**
     * Gets the validation message by the specified index.
     *
     * @param {number} index - The index.
     * @returns
     */
    public get(index: number)
    {
        mustBeInteger(index);

        if (index >= 0 &&
            index < this.validationMessages.length)
        {
            return this.validationMessages[index];
        }
        else
        {
            return null;
        }
    }

    /**
     * Converts validation messages as an array.
     *
     * @returns
     */
    public toArray()
    {
        return this.validationMessages.concat([]);
    }

    /**
     * Converts validation messages to a string.
     *
     * @returns
     */
    public toString()
    {
        return this.validationMessages.map(x => x.message).join("\n");
    }

    // #endregion
}
