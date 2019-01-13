import { IValidatable } from "./ivalidatable";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";
import { cannotBeNullOrEmpty, isEqualTo, isNull, isNullOrEmptyArray } from "defensive-programming-framework";

export class ValidationMessage
{
    // #region Properties (2)

    public static getLocalizedMessage: (message: string) => string = message => message;

    public readonly message: string;

    public readonly messageKey: string;
    public readonly defaultMessage: string;
    public readonly messageParameters: any[];
    public readonly validationSource: IValidatable;
    public readonly propertyName: string;
    public readonly validationLevel: ValidationLevel;
    public readonly validationContext: string | null;
    public readonly validationPriority: number;

    // #endregion

    // #region Constructors (1)

    constructor(messageKey: string, defaultMessage: string, messageParameters: any[], validationSource: IValidatable, propertyName: string, validationLevel: ValidationLevel = ValidationLevel.error, validationContext: string | null = ValidationContext.default, validationPriority: number = 0)
    {
        this.messageKey = messageKey;
        this.defaultMessage = defaultMessage;
        this.messageParameters = messageParameters;
        this.validationSource = validationSource;
        this.propertyName = propertyName;
        this.validationLevel = validationLevel;
        this.validationContext = validationContext;
        this.validationPriority = validationPriority;

        this.message = this.FormatMessage(messageKey, defaultMessage, messageParameters);
    }

    // #endregion

    // #region Public Methods (1)

    public toString()
    {
        return `${this.validationSource}.${this.propertyName} (message: "${this.message}\", level: ${this.validationLevel}, context: ${this.validationContext ? this.validationContext : "default"}, priority: ${this.validationPriority})`;
    }

    private FormatMessage(messageKey: string, defaultMessage: string, messageParameters: any[])
    {
        cannotBeNullOrEmpty(messageKey);
        cannotBeNullOrEmpty(defaultMessage);

        let message: string;
        let stringFormat = (str: string, ...args: string[]) => str.replace(/{(\d+)}/g, (match, index) => args[index] || "");

        message = isNull(ValidationMessage.getLocalizedMessage) ? defaultMessage : ValidationMessage.getLocalizedMessage(messageKey);
        message = isNull(message) ? defaultMessage : message;

        if (!isNullOrEmptyArray(messageParameters))
        {
            try
            {
                message = stringFormat(message, messageParameters.reduce(x => x.toString()));
            }
            catch (ex)
            {
            }
        }

        return message;
    }

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
}
