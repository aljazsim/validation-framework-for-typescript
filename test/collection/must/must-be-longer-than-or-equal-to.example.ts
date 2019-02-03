import { MustBeLongerThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeLongerThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @MustBeLongerThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeLongerThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
