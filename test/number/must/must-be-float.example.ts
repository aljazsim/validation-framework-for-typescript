import { mustBeFloat, Validatable, ValidationLevel } from "../../../source";

export class MustBeFloatExample extends Validatable
{
    // #region Properties (1)

    @mustBeFloat(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
