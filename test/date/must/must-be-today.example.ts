import { mustBeToday, Validatable, ValidationLevel } from "../../../source";

export class MustBeTodayExample extends Validatable
{
    // #region Properties (1)

    @mustBeToday("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
