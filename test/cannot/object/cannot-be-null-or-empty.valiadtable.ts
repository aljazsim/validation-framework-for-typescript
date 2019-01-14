import { cannotBeNullOrEmpty, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullOrEmptyValidatable extends Validatable
{
    // #region Properties (2)

    @cannotBeNullOrEmpty()
    public name1: string | null | undefined = null;

    @cannotBeNullOrEmpty("Message1", "Message1Key", ValidationLevel.warning, "context", 5)
    public name2: string | null | undefined = null;

    // #endregion

    // #region Public Methods (1)

    public getActiveValidationContexts()
    {
        return this.name2 === null ? ["context"] : [];
    }

    // #endregion
}
