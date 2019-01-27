import { mustBeShorterThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeShorterThanExample extends Validatable
{
    // #region Properties (1)

    @mustBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @mustBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
