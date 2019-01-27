import { cannotContain, Validatable, ValidationLevel } from "../../../source";

export class CannotContainExample extends Validatable
{
    // #region Properties (1)

    @cannotContain(x => x > 3, "message", "message key", ValidationLevel.error, null, 15)
    public value: number[] | null = null;

    // #endregion
}
