import { MustBeLongerThan, Validatable, ValidationLevel } from "../../../source";

export class MustBeLongerThanExample extends Validatable
{
    // #region Properties (1)

    @MustBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
