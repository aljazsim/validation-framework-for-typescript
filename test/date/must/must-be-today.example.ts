import { MustBeToday, Validatable, ValidationLevel } from "../../../source";

export class MustBeTodayExample extends Validatable
{
    // #region Properties (1)

    @MustBeToday("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
