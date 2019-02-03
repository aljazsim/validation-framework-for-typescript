import { MustBeDate, Validatable, ValidationLevel } from "../../../source";

export class MustBeDateExample extends Validatable
{
    // #region Properties (1)

    @MustBeDate("message", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
