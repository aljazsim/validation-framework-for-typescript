import { cannotBeTypeOf, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTypeOfExample extends Validatable
{
    // #region Properties (1)

    @cannotBeTypeOf("string", "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: any | null = null;

    // #endregion
}
