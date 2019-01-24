import { mustBeNull, Validatable, ValidationLevel } from "../../../source";

export class MustBeNullExample extends Validatable
{
    // #region Properties (1)

    @mustBeNull("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
