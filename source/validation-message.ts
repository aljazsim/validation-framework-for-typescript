import { IValidatable } from "./ivalidatable";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";
import { isEqualTo, isNull } from "defensive-programming-framework";

export class ValidationMessage
{
    // #region Properties (9)

    public readonly message: string;
    public readonly propertyName: string;
    public readonly validationContext: string | null;
    public readonly validationLevel: ValidationLevel;
    public readonly validationPriority: number;
    public readonly validationSource: IValidatable;

    // #endregion

    // #region Constructors (1)

    constructor(message: string, validationSource: IValidatable, propertyName: string, validationLevel: ValidationLevel = ValidationLevel.error, validationContext: string | null = ValidationContext.default, validationPriority: number = 0)
    {
        this.message = message;
        this.validationSource = validationSource;
        this.propertyName = propertyName;
        this.validationLevel = validationLevel;
        this.validationContext = validationContext;
        this.validationPriority = validationPriority;
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

    // #endregion
}
