import { CannotContain, Validatable, ValidationLevel } from "../../../source";

export class CannotContainExample extends Validatable
{
    // #region Properties (1)

    @CannotContain(x => x > 3, "message", "message key", ValidationLevel.error, null, 15)
    public value: number[] | null = null;

    // #endregion
}
