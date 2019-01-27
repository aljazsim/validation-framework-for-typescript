import { cannotBeLongerThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLongerThanExample extends Validatable
{
    // #region Properties (1)

    @cannotBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @cannotBeLongerThan(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
