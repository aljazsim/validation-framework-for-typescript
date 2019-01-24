import { mustBeInstanceOf, Validatable, ValidationLevel } from "../../../source";

export class MustBeInstanceOfExample extends Validatable
{
    // #region Properties (1)

    @mustBeInstanceOf(Date, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
