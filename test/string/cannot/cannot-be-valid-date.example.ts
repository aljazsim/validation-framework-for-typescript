import { CannotBeValidDate, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidDateExample extends Validatable
{
    // #region Properties (1)

    @CannotBeValidDate("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
