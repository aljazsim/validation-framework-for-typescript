import { mustBeGreaterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeGreaterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @mustBeGreaterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
