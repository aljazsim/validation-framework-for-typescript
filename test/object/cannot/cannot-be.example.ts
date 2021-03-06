import { CannotBe, Validatable, ValidationLevel } from "../../../source";

export class CannotBeExample extends Validatable
{
    // #region Properties (1)

    @CannotBe(x => x === 10, "message", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
