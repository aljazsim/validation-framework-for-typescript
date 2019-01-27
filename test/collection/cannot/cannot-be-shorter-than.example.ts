import { cannotBeShorterThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeShorterThanExample extends Validatable
{
    // #region Properties (1)

    @cannotBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @cannotBeShorterThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}