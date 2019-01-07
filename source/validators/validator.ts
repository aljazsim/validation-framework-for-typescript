import { ValidationContext } from "../validation-context";
import { ValidationLevel } from "../validation-level";
import { whenIsNull, whenIsNullOrEmpty } from "defensive-programming-framework";

export abstract class Validator
{
    // #region Constructors (1)

    constructor(public message: string, public messageKey: string, public validationLevel: ValidationLevel, public validationContext: string, public validationPriority: number)
    {
        this.message = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(message, this.getDefaultMessage()), "Undefined message.");
        this.messageKey = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(messageKey, this.getDefaultMessageKey()), "UndefinedMessageKey");

        this.validationContext = whenIsNull(validationContext, ValidationContext.default);
        this.validationLevel = whenIsNull(validationLevel, ValidationLevel.error);
        this.validationPriority = whenIsNull(validationPriority, 0);
    }

    // #endregion

    // #region Public Accessors (1)

    public get messageParameters(): any[]
    {
        return whenIsNull(this.getMessageParameters(), []);
    }

    // #endregion

    // #region Public Abstract Methods (3)

    public abstract getDefaultMessage(): string;
    public abstract getDefaultMessageKey(): string;
    public abstract isValid(value: any): boolean;

    // #endregion

    // #region Protected Methods (1)

    protected getMessageParameters(): any[]
    {
        return [];
    }

    // #endregion
}
