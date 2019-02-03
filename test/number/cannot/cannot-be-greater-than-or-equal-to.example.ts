import { CannotBeGreaterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeGreaterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @CannotBeGreaterThanOrEqualTo(3, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
