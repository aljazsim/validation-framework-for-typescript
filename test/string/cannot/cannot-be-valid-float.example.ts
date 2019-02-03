import { CannotBeValidFloat, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidFloatExample extends Validatable
{
    // #region Properties (1)

    @CannotBeValidFloat("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
