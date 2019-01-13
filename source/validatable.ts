import { IValidatable } from "./ivalidatable";
import { ValidatableExtensions } from "./validatable-extensions";
import { ValidationMessage } from "./validation-message";

export abstract class Validatable implements IValidatable
{
    // #region Constructors (1)

    public constructor()
    {
    }

    // #endregion

    // #region Public Methods (3)

    public getActiveValidationContexts(): string[]
    {
        return [];
    }

    public isValid(propertyName?: string): boolean
    {
        return ValidatableExtensions.isValid(this, propertyName, this.getActiveValidationContexts());
    }

    public validate(propertyName?: string): ValidationMessage[]
    {
        let validationMessages = ValidatableExtensions.validate(this, propertyName, this.getActiveValidationContexts());

        return validationMessages;
    }

    // #endregion
}
