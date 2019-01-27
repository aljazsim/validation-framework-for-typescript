import { cannotContainOnlyNull, Validatable, ValidationLevel } from "../../../source";

export class CannotContainOnlyNullExample extends Validatable
{
    // #region Properties (1)

    @cannotContainOnlyNull("message", "message key", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
