import { CannotBeNull, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullExample extends Validatable
{
    // #region Properties (1)

    @CannotBeNull("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
