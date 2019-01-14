import { cannotBeNull, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullValidatable extends Validatable
{
    // #region Properties (2)

    @cannotBeNull()
    public name1: string | null | undefined = null;

    @cannotBeNull("Message1", "Message1Key", ValidationLevel.warning, "context", 5)
    public name2: string | null | undefined = null;

    // #endregion

    // #region Public Methods (1)

    public getActiveValidationContexts()
    {
        return this.name2 ? [] : ["context"];
    }

    // #endregion
}
