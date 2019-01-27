import { cannotBeToday, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTodayExample extends Validatable
{
    // #region Properties (1)

    @cannotBeToday("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
