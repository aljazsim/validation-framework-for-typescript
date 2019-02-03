import { CannotContainOnlyNull, Validatable, ValidationLevel } from "../../../source";

export class CannotContainOnlyNullExample extends Validatable
{
    // #region Properties (1)

    @CannotContainOnlyNull("message", "message key", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
