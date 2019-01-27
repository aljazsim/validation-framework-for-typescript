import { cannotBeInteger, Validatable, ValidationLevel } from "../../../source";

export class CannotBeIntegerExample extends Validatable
{
    // #region Properties (1)

    @cannotBeInteger("message", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
