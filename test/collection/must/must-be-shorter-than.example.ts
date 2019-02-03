import { MustBeShorterThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeShorterThanExample extends Validatable
{
    // #region Properties (1)

    @MustBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
