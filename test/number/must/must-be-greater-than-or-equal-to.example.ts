import { MustBeGreaterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeGreaterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @MustBeGreaterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
