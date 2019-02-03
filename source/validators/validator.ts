import { ValidationContext } from "../validation-context";
import { ValidationLevel } from "../validation-level";
import { cannotBeNullOrEmpty, isNull, isNullOrEmptyArray, whenIsNull, whenIsNullOrEmpty } from "defensive-programming-framework";

/**
 * The validator base class.
 *
 * @export
 * @abstract
 * @class Validator
 */
export abstract class Validator
{
    // #region Properties (6)

    /**
     * The message template.
     *
     * @private
     * @type {(string | null | undefined)}
     */
    private readonly messageTemplate: string | null | undefined;

    /**
     * The message key.
     *
     * @type {string}
     */
    public readonly messageKey: string;

    /**
     * The  validation context.
     *
     * @type {(string | null | undefined)}
     */
    public readonly validationContext: string | null | undefined;

    /**
     * The validation level.
     *
     * @type {ValidationLevel}
     */
    public readonly validationLevel: ValidationLevel;

    /**
     * The validation property.
     *
     * @type {number}
     */
    public readonly validationPriority: number;

    /**
     * The get localized message delegate.
     *
     * @static
     */
    public static getLocalizedMessage: (message: string) => string | null = message => null;

    // #endregion

    // #region Constructors (1)

    /**
     * Creates an instance of Validator.
     * @param {(string | null | undefined)} message - The custom validation message.
     * @param {(string | null | undefined)} messageKey - The custom validation key.
     * @param {(ValidationLevel | null | undefined)} validationLevel - The custom validation level.
     * @param {(string | null | undefined)} validationContext - The custom validation context.
     * @param {(number | null | undefined)} validationPriority - The custom validation priority.
     */
    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        this.messageTemplate = message;
        this.messageKey = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(messageKey, this.getDefaultMessageKey()), "UndefinedMessageKey");

        this.validationContext = whenIsNull(validationContext, ValidationContext.default);
        this.validationLevel = <ValidationLevel>whenIsNull(validationLevel, ValidationLevel.error);
        this.validationPriority = <number>whenIsNull(validationPriority, 0);
    }

    // #endregion

    // #region Public Accessors (1)

    /**
     * Gets the validation message.
     *
     * @readonly
     * @type {string}
     */
    public get message(): string
    {
        let messageTemplate = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(this.messageTemplate, this.getDefaultMessage()), "Undefined message.");
        let localizedMessage = this.localizeMessage(this.messageKey) || messageTemplate;
        let formattedMessage = this.formatMessage(localizedMessage, this.getMessageParameters()) || messageTemplate;

        return formattedMessage;
    }

    // #endregion

    // #region Public Abstract Methods (1)

    /**
    * Validates the specified value.
    *
    * @param {*} value
    * @returns {boolean} - True if the value is valid; false otherwise.
    */
    public abstract isValid(value: any): boolean;

    // #endregion

    // #region Protected Methods (1)

    /**
     * Gets the message parameters.
     *
     * @protected
     * @returns {string} - The message parameters
     */
    protected getMessageParameters(): any[]
    {
        return [];
    }

    // #endregion

    // #region Protected Abstract Methods (2)

    /**
     * Gets the default message.
     *
     * @protected
     * @abstract
     * @returns {string} - The default message.
     */
    protected abstract getDefaultMessage(): string;

    /**
     * Gets the default message key.
     *
     * @protected
     * @abstract
     * @returns {string} - The default message key.
     */
    protected abstract getDefaultMessageKey(): string;

    // #endregion

    // #region Private Methods (4)

    /**
     * Replaces the placeholders in the message template with actual values.
     *
     * @private
     * @param {string} messageTemplate - The message template.
     * @param {any[]} messageParameters - The message parameters.
     * @returns
     */
    private formatMessage(messageTemplate: string, messageParameters: any[])
    {
        cannotBeNullOrEmpty(messageTemplate);

        if (!isNullOrEmptyArray(messageParameters))
        {
            try
            {
                messageTemplate = this.stringFormat(messageTemplate, messageParameters.map(x => this.toString(x)));
            }
            catch (ex)
            {
            }
        }

        return messageTemplate;
    }

    /**
     * Localizes the validation message if the get localized message delegate that provides the localized message template is set.
     *
     * @private
     * @param {string} messageKey - The message template.
     * @returns - The localized message.
     */
    private localizeMessage(messageKey: string)
    {
        cannotBeNullOrEmpty(messageKey);

        return isNull(Validator.getLocalizedMessage) ? null : Validator.getLocalizedMessage(messageKey);
    }

    /**
     * Formats the string by replacing the placeholders within the string with actual values.
     *
     * @private
     * @param {string} str - The template string.
     * @param {string[]} args - The argument values.
     * @returns
     */
    private stringFormat(str: string, args: string[])
    {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || "");
    }

    /**
     * Converts the specified value to string.
     *
     * @private
     * @param {*} value - The value.
     * @returns {string} - The string representation of the value.
     */
    private toString(value: any): string
    {
        if (value === null)
        {
            return "null";
        }
        else if (value === undefined)
        {
            return "undefined";
        }
        else if (typeof value === "function")
        {
            return (<Function>value).name;
        }
        else if (value instanceof Array)
        {
            if (value.length <= 10)
            {
                return "[" + (<[]>value).map(x => this.toString(x)).join(", ") + "]";
            }
            else
            {
                return "[" + (<[]>value).filter((u, i) => i < 10).map(x => this.toString(x)).join(", ") + ", ...]";
            }
        }
        else
        {
            return value.toString();
        }
    }

    // #endregion
}
