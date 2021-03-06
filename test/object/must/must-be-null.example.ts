import { MustBeNull, Validatable, ValidationLevel } from "../../../source";

export class MustBeNullExample extends Validatable
{
    // #region Properties (1)

    @MustBeNull("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
