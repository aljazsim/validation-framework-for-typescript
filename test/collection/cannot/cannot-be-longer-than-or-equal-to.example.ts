import { cannotBeLongerThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLongerThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeLongerThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @cannotBeLongerThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
