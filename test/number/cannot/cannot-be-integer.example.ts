import { CannotBeInteger, Validatable, ValidationLevel } from "../../../source";

export class CannotBeIntegerExample extends Validatable
{
    // #region Properties (1)

    @CannotBeInteger("message", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
