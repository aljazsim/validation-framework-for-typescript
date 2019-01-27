import { cannotBeDate, Validatable, ValidationLevel } from "../../../source";

export class CannotBeDateExample extends Validatable
{
    // #region Properties (1)

    @cannotBeDate("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
