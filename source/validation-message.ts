import { IValidatable } from "./ivalidatable";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";
import { cannotBeNullOrEmpty, isEqualTo, isNull, isNullOrEmptyArray } from "defensive-programming-framework";

export class ValidationMessage
{
    // #region Properties (9)

    public readonly message: string;
    public readonly messageKey: string;
    public readonly messageParameters: any[];
    public readonly propertyName: string;
    public readonly validationContext: string | null;
    public readonly validationLevel: ValidationLevel;
    public readonly validationPriority: number;
    public readonly validationSource: IValidatable;

    public static getLocalizedMessage: (message: string) => string | null = message => null;

    // #endregion

    // #region Constructors (1)

    constructor(messageKey: string, message: string, messageParameters: any[], validationSource: IValidatable, propertyName: string, validationLevel: ValidationLevel = ValidationLevel.error, validationContext: string | null = ValidationContext.default, validationPriority: number = 0)
    {
        this.messageKey = messageKey;
        this.messageParameters = messageParameters;
        this.validationSource = validationSource;
        this.propertyName = propertyName;
        this.validationLevel = validationLevel;
        this.validationContext = validationContext;
        this.validationPriority = validationPriority;

        this.message = this.formatMessage(messageKey, message, messageParameters);
    }

    // #endregion

    // #region Public Static Methods (1)

    public static equals(a: ValidationMessage, b: ValidationMessage)
    {
        if (isEqualTo(a, b))
        {
            // if both are null, or both are same instance, return true
            return true;
        }
        else if (isNull(a) &&
            !isNull(b))
        {
            return false;
        }
        else if (!isNull(a) &&
            isNull(b))
        {
            return false;
        }
        else
        {
            // compare properties
            return a.validationSource === b.validationSource &&
                a.propertyName === b.propertyName &&
                a.validationLevel === b.validationLevel &&
                a.validationPriority === b.validationPriority &&
                a.validationContext === b.validationContext &&
                a.message === b.message;
        }
    }

    // #endregion

    // #region Public Methods (1)

    public toString()
    {
        return `${this.validationSource}.${this.propertyName} (message: "${this.message}\", level: ${this.validationLevel}, context: ${this.validationContext ? this.validationContext : "default"}, priority: ${this.validationPriority})`;
    }

    // #endregion

    // #region Private Methods (2)

    private formatMessage(messageKey: string, message: string, messageParameters: any[])
    {
        cannotBeNullOrEmpty(messageKey);
        cannotBeNullOrEmpty(message);

        // localize the message if possible
        if (!isNull(ValidationMessage.getLocalizedMessage))
        {
            message = ValidationMessage.getLocalizedMessage(messageKey) || message;
        }

        // format the message
        if (!isNullOrEmptyArray(messageParameters))
        {
            try
            {
                message = this.stringFormat(message, messageParameters.reduce(x => x.toString()));
            }
            catch (ex)
            {
            }
        }

        return message;
    }

    private stringFormat(str: string, ...args: string[])
    {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || "");
    }

    // #endregion
}
