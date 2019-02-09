import { ValidationLevel } from "./validation-level";
import { ValidationMessage } from "./validation-message";
import { cannotBeNullOrEmpty, isNull, mustBeInteger } from "defensive-programming-framework";

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
        validationMessages = validationMessages ? validationMessages : [];

        // make a copy of the array
        validationMessages = validationMessages.concat([]);

        // remove null and undefined values
        for (let i = validationMessages.length - 1; i >= 0; i--)
        {
            if (isNull(validationMessages[i]))
            {
                validationMessages.splice(i, 1);
            }
        }

        // remove duplicates
        for (let i = validationMessages.length - 1; i >= 0; i--)
        {
            for (let j = i - 1; j >= 0; j--)
            {
                if (validationMessages[i].validationSource === validationMessages[j].validationSource &&
                    validationMessages[i].propertyName === validationMessages[j].propertyName &&
                    validationMessages[i].validationLevel === validationMessages[j].validationLevel &&
                    validationMessages[i].validationPriority === validationMessages[j].validationPriority &&
                    validationMessages[i].validationContext === validationMessages[j].validationContext &&
                    validationMessages[i].message === validationMessages[j].message)
                {
                    validationMessages.splice(i, 1);

                    break;
                }
            }
        }

        // order
        validationMessages = validationMessages.sort((a, b) =>
        {
            let diff: number;

            diff = -this.compare(Math.max(a.validationPriority, 0), Math.max(b.validationPriority)); // order by validation priority (lower priority means higher score, priority cannot be lower than 0)

            if (diff === 0)
            {
                diff = this.compare(this.validationLevelToNumber(a.validationLevel), this.validationLevelToNumber(b.validationLevel)); // then by validation level
            }

            diff = -diff; // descending

            return diff;
        });

        this.validationMessages = validationMessages;
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
        return new ValidationMessageCollection(this.validationMessages.filter((validationMessage) => validationMessage.validationLevel === ValidationLevel.error));
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
     * @returns {boolean} - True if the validation message collection contains error messages; false otherwise.
     */
    public get hasErrors(): boolean
    {
        return this.validationMessages.some((validationMessage) => validationMessage.validationLevel === ValidationLevel.error);
    }

    /**
     * Checks if the collection contains any info validation messages.
     *
     * @returns {boolean} - True if the validation message collection contains info messages; false otherwise.
     */
    public get hasInfos(): boolean
    {
        return this.validationMessages.some((validationMessage) => validationMessage.validationLevel === ValidationLevel.info);
    }

    /**
     * Checks if the collection contains any warning validation messages.
     *
     * @returns {boolean} - True if the validation message collection contains warning messages; false otherwise.
     */
    public get hasWarnings(): boolean
    {
        return this.validationMessages.some((validationMessage) => validationMessage.validationLevel === ValidationLevel.warning);
    }

    /**
     * Gets the list of all the info validation messages.
     *
     * @readonly
     */
    public get infos()
    {
        return new ValidationMessageCollection(this.validationMessages.filter((validationMessage) => validationMessage.validationLevel === ValidationLevel.info));
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
        return new ValidationMessageCollection(this.validationMessages.filter((validationMessage) => validationMessage.validationLevel === ValidationLevel.warning));
    }

    // #endregion

    // #region Public Methods (4)

    /**
     * Filters validation messages by property name.
     *
     * @param {string} propertyName
     * @returns - The validation message collection.
     */
    public filter(propertyName: string)
    {
        cannotBeNullOrEmpty(propertyName);

        return new ValidationMessageCollection(this.validationMessages.filter((validationMessage, i, array) => validationMessage.propertyName === propertyName));
    }

    /**
     * Gets the validation message by the specified index.
     *
     * @param {number} index - The index.
     * @returns - The validation message at the specified index or null if index is outside of bounds of the array.
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
     * @returns - The array representation of the validation messages collection.
     */
    public toArray()
    {
        return this.validationMessages.concat([]);
    }

    /**
     * Converts validation messages to a string.
     *
     * @returns - The string representation of the validation message collection.
     */
    public toString()
    {
        return this.validationMessages.map(x => x.message).join("\n");
    }

    // #endregion

    // #region Private Methods ()

    /**
     * Compares two numbers.
     *
     * @private
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns - 1 if a > b, -1 if b < a, 0 otherwise.
     */
    private compare(a: number, b: number)
    {
        if (a > b)
        {
            return 1;
        }
        else if (a < b)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }

    /**
     * Converts validation level enum value to number.
     *
     * @private
     * @param {ValidationLevel} validationLevel - The validation level.
     * @returns - The validation level number value.
     */
    private validationLevelToNumber(validationLevel: ValidationLevel)
    {
        if (validationLevel === ValidationLevel.error)
        {
            return 3;
        }
        else if (validationLevel === ValidationLevel.warning)
        {
            return 2;
        }
        else
        {
            return 1;
        }
    }

    // #endregion
}
