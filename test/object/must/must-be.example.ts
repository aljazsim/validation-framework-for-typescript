import { MustBe, Validatable, ValidationLevel } from "../../../source";

export class MustBeExample extends Validatable
{
    // #region Properties (1)

    @MustBe(x => x === 10, "message", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
