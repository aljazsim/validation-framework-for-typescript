import { cannotBeFloat, Validatable, ValidationLevel } from "../../../source";

export class CannotBeFloatExample extends Validatable
{
    // #region Properties (1)

    @cannotBeFloat(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
