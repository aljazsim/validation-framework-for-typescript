import { mustBe, Validatable, ValidationLevel } from "../../../source";

export class MustBeExample extends Validatable
{
    // #region Properties (1)

    @mustBe(x => x === 10, "message", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
