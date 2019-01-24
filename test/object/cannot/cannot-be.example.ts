import { cannotBe, Validatable, ValidationLevel } from "../../../source";

export class CannotBeExample extends Validatable
{
    // #region Properties (1)

    @cannotBe(x => x === 10, "message", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
