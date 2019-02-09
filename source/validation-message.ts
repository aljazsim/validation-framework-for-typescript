import { IValidatable } from "./ivalidatable";
import { ValidationContext } from "./validation-context";
import { ValidationLevel } from "./validation-level";

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
}
