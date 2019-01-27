import { mustBeLessThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeLessThanExample extends Validatable
{
    // #region Properties (1)

    @mustBeLessThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
