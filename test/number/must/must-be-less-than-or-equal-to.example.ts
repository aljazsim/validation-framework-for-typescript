import { mustBeLessThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeLessThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @mustBeLessThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
