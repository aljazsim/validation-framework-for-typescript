import { mustBeBetween, Validatable, ValidationLevel } from "../../../source";

export class MustBeBetweenToExample extends Validatable
{
    // #region Properties (1)

    @mustBeBetween(3, 5, true, "message {0} - {1}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
