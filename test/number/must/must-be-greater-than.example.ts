import { MustBeGreaterThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeGreaterThanExample extends Validatable
{
    // #region Properties (1)

    @MustBeGreaterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
