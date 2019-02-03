import { MustBeShorterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeShorterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @MustBeShorterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeShorterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
