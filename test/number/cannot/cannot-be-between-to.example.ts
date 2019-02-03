import { CannotBeBetween, Validatable, ValidationLevel } from "../../../source";

export class CannotBeBetweenToExample extends Validatable
{
    // #region Properties (1)

    @CannotBeBetween(3, 5, true, "message {0} - {1}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
