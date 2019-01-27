import { cannotBeLessThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLessThanExample extends Validatable
{
    // #region Properties (1)

    @cannotBeLessThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
