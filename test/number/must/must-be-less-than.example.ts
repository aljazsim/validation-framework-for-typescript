import { MustBeLessThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeLessThanExample extends Validatable
{
    // #region Properties (1)

    @MustBeLessThan(3, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
