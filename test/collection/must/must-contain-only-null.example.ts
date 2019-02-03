import { MustContainOnlyNull, Validatable, ValidationLevel } from "../../../source";

export class MustContainOnlyNullExample extends Validatable
{
    // #region Properties (1)

    @MustContainOnlyNull("message", "message key", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
