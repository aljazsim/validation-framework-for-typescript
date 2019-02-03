import { CannotBeFloat, Validatable, ValidationLevel } from "../../../source";

export class CannotBeFloatExample extends Validatable
{
    // #region Properties (1)

    @CannotBeFloat(3, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
