import { mustBeLongerThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeLongerThanExample extends Validatable
{
    // #region Properties (1)

    @mustBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @mustBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
