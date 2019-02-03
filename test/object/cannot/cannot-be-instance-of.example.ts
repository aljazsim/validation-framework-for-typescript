import { CannotBeInstanceOf, Validatable, ValidationLevel } from "../../../source";

export class CannotBeInstanceOfExample extends Validatable
{
    // #region Properties (1)

    @CannotBeInstanceOf(Date, "message {0}", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
