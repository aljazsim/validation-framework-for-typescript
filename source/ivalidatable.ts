import { ValidationMessage } from "./validation-message";

export interface IValidatable
{
    // #region Methods (5)

    getActiveValidationContexts(): string[];

    isValid(propertyName?: string, propertyValue?: any): boolean;

    validate(propertyName?: string, propertyValue?: any): ValidationMessage[];

    // #endregion
}
