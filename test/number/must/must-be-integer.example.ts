import { MustBeInteger, Validatable, ValidationLevel } from "../../../source";

export class MustBeIntegerExample extends Validatable
{
    // #region Properties (1)

    @MustBeInteger("message", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
