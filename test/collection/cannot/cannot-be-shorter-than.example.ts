import { CannotBeShorterThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeShorterThanExample extends Validatable
{
    // #region Properties (1)

    @CannotBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @CannotBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
