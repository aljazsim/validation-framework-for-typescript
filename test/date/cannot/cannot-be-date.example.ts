import { CannotBeDate, Validatable, ValidationLevel } from "../../../source";

export class CannotBeDateExample extends Validatable
{
    // #region Properties (1)

    @CannotBeDate("message", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
