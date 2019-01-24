import { cannotBeNull, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullExample extends Validatable
{
    // #region Properties (1)

    @cannotBeNull("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
