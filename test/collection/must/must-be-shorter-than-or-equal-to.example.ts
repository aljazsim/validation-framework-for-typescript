import { cannotBeShorterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeShorterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeShorterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @cannotBeShorterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
