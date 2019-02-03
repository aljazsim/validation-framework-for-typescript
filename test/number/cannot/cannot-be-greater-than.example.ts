import { CannotBeGreaterThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeGreaterThanExample extends Validatable
{
    // #region Properties (1)

    @CannotBeGreaterThan(3, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
