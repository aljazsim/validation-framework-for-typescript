import { mustBeValidDate, Validatable, ValidationLevel } from "../../../source";

export class MustBeValidDateExample extends Validatable
{
    // #region Properties (1)

    @mustBeValidDate("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
