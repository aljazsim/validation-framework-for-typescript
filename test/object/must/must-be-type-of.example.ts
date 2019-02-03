import { MustBeTypeOf, Validatable, ValidationLevel } from "../../../source";

export class MustBeTypeOfExample extends Validatable
{
    // #region Properties (1)

    @MustBeTypeOf("string", "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
