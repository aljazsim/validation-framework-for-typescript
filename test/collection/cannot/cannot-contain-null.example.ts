import { cannotContainNull, Validatable, ValidationLevel } from "../../../source";

export class CannotContainNullExample extends Validatable
{
    // #region Properties (1)

    @cannotContainNull("message", "message key", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
