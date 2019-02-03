import { CannotBeLessThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLessThanExample extends Validatable
{
    // #region Properties (1)

    @CannotBeLessThan(3, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
