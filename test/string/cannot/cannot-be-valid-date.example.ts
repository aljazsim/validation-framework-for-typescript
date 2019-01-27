import { cannotBeValidDate, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidDateExample extends Validatable
{
    // #region Properties (1)

    @cannotBeValidDate("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
