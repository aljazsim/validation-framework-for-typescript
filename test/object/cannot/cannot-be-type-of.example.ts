import { CannotBeTypeOf, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTypeOfExample extends Validatable
{
    // #region Properties (1)

    @CannotBeTypeOf("string", "message {0}", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
