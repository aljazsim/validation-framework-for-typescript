import { cannotBeGreaterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeGreaterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeGreaterThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
