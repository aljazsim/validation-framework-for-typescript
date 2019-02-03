import { CannotBeToday, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTodayExample extends Validatable
{
    // #region Properties (1)

    @CannotBeToday("message", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
