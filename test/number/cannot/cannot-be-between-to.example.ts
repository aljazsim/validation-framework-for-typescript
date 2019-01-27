import { cannotBeBetween, Validatable, ValidationLevel } from "../../../source";

export class CannotBeBetweenToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeBetween(3, 5, true, "message {0} - {1}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
