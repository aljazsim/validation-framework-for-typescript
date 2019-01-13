import { ValidationContext } from "../validation-context";
import { ValidationLevel } from "../validation-level";
import { whenIsNull, whenIsNullOrEmpty } from "defensive-programming-framework";

export abstract class Validator
{
    // #region Properties (5)

    public readonly message: string;
    public readonly messageKey: string;
    public readonly validationContext: string | null | undefined;
    public readonly validationLevel: ValidationLevel;
    public readonly validationPriority: number;

    // #endregion

    // #region Constructors (1)

    constructor(message: string | null | undefined, messageKey: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        this.message = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(message, this.getDefaultMessage()), "Undefined message.");
        this.messageKey = <string>whenIsNullOrEmpty(whenIsNullOrEmpty(messageKey, this.getDefaultMessageKey()), "UndefinedMessageKey");

        this.validationContext = whenIsNull(validationContext, ValidationContext.default);
        this.validationLevel = <ValidationLevel>whenIsNull(validationLevel, ValidationLevel.error);
        this.validationPriority = <number>whenIsNull(validationPriority, 0);
    }

    // #endregion

    // #region Public Accessors (1)

    public get messageParameters(): any[]
    {
        return <any[]>whenIsNull(this.getMessageParameters(), []);
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
