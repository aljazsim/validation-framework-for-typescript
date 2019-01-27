import { cannotBeEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeEqualToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeEqualTo(11, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}