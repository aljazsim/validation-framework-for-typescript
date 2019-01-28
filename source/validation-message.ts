import { IValidatable } from "./ivalidatable";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";
import { isEqualTo, isNull } from "defensive-programming-framework";

/**
 * The validation message.
 *
 * @export
 * @class ValidationMessage
 */
export class ValidationMessage
{
    // #region Properties (6)

    /**
     * The validation message.
     *
     * @type {string}
     */
    public readonly message: string;

    /**
     * The property name.
     *
     * @type {string}
     */
    public readonly propertyName: string;

    /**
     * The validation context.
     *
     * @type {(string | null)}
     */
    public readonly validationContext: string | null;

    /**
     * The validation level.
     *
     * @type {ValidationLevel}
     */
    public readonly validationLevel: ValidationLevel;

    /**
     * The validation priority.
     *
     * @type {number}
     */
    public readonly validationPriority: number;

    /**
     * The validation source.
     *
     * @type {IValidatable}
     */
    public readonly validationSource: IValidatable;

    // #endregion

    // #region Constructors (1)

    /**
     * Creates an instance of ValidationMessage.
     * @param {string} message - The validation message.
     * @param {IValidatable} validationSource - The validation source.
     * @param {string} propertyName - The validated property name.
     * @param {ValidationLevel} [validationLevel=ValidationLevel.error] - The validation level.
     * @param {(string | null)} [validationContext=ValidationContext.default] - The validation context.
     * @param {number} [validationPriority=0] - The validation priority.
     */
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

    /**
     * Checks if two validation messages are equal.
     *
     * @static
     * @param {ValidationMessage} a - The first validation message.
     * @param {ValidationMessage} b - The second validation message.
     * @returns
     */
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

    /**
     * Converts the validation message to its string representation.
     *
     * @returns - The string representation of the validation message.
     */
    public toString()
    {
        return `${this.validationSource}.${this.propertyName} (message: "${this.message}\", level: ${this.validationLevel}, context: ${this.validationContext ? this.validationContext : "default"}, priority: ${this.validationPriority})`;
    }

    // #endregion
}
