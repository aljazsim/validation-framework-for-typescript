import { cannotBeGreaterThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeGreaterThanExample extends Validatable
{
    // #region Properties (1)

    @cannotBeGreaterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
