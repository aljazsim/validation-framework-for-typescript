import { mustContainNull, Validatable, ValidationLevel } from "../../../source";

export class MustContainNullExample extends Validatable
{
    // #region Properties (1)

    @mustContainNull("message", "message key", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
