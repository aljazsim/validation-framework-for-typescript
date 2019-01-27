import { cannotBeValidFloat, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidFloatExample extends Validatable
{
    // #region Properties (1)

    @cannotBeValidFloat("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
