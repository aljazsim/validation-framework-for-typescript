import { cannotBeInstanceOf, Validatable, ValidationLevel } from "../../../source";

export class CannotBeInstanceOfExample extends Validatable
{
    // #region Properties (1)

    @cannotBeInstanceOf(Date, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
