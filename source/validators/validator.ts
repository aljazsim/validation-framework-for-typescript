import { ValidationContext } from "../validation-context";
import { ValidationLevel } from "../validation-level";
import { cannotBeNullOrEmpty, isNull, isNullOrEmptyArray, whenIsNull, whenIsNullOrEmpty } from "defensive-programming-framework";

export abstract class Validator
{
    // #region Properties (6)

    private readonly messageTemplate: string;

    public readonly messageKey: string;
    public readonly validationContext: string | null | undefined;
    public readonly validationLevel: ValidationLevel;
    public readonly validationPriority: number;

    public static getLocalizedMessage: (message: string) => string | null = message => null;

    // #endregion

    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        this.messageTemplate = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(message, this.getDefaultMessage()), "Undefined message.");
        this.messageKey = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(messageKey, this.getDefaultMessageKey()), "UndefinedMessageKey");

        this.validationContext = whenIsNull(validationContext, ValidationContext.default);
        this.validationLevel = <ValidationLevel>whenIsNull(validationLevel, ValidationLevel.error);
        this.validationPriority = <number>whenIsNull(validationPriority, 0);
    }

    // #endregion

    // #region Public Accessors (1)

    public get message(): string
    {
        let localizedMessage = this.localizeMessage(this.messageKey) || this.messageTemplate;
        let formattedMessage = this.formatMessage(localizedMessage, this.getMessageParameters()) || this.messageTemplate;

        return formattedMessage;
    }

    // #endregion

    // #region Public Abstract Methods (1)

    public abstract isValid(value: any): boolean;

    // #endregion

    // #region Protected Methods (1)

    protected getMessageParameters(): any[]
    {
        return [];
    }

    // #endregion

    // #region Protected Abstract Methods (2)

    protected abstract getDefaultMessage(): string;
    protected abstract getDefaultMessageKey(): string;

    // #endregion

    // #region Private Methods (4)

    private formatMessage(message: string, messageParameters: any[])
    {
        cannotBeNullOrEmpty(message);

        if (!isNullOrEmptyArray(messageParameters))
        {
            try
            {
                return this.stringFormat(message, messageParameters.map(x => this.toString(x)));
            }
            catch (ex)
            {
            }
        }

        return null;
    }

    private localizeMessage(messageKey: string)
    {
        cannotBeNullOrEmpty(messageKey);

        return isNull(Validator.getLocalizedMessage) ? null : Validator.getLocalizedMessage(messageKey);
    }

    private stringFormat(str: string, args: string[])
    {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || "");
    }

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
