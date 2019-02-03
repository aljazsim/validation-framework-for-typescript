import { CannotBeTypeOf, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTypeOfExample extends Validatable
{
    // #region Properties (1)

    @CannotBeTypeOf("string", "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
