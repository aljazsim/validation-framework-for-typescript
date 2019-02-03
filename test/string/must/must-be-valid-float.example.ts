import { MustBeValidFloat, Validatable, ValidationLevel } from "../../../source";

export class MustBeValidFloatExample extends Validatable
{
    // #region Properties (1)

    @MustBeValidFloat("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
