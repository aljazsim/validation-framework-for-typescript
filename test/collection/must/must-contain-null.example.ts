import { MustContainNull, Validatable, ValidationLevel } from "../../../source";

export class MustContainNullExample extends Validatable
{
    // #region Properties (1)

    @MustContainNull("message", ValidationLevel.error, null, 15)
    public value: (number | null)[] | null = null;

    // #endregion
}
