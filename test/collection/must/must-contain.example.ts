import { MustContain, Validatable, ValidationLevel } from "../../../source";

export class MustContainExample extends Validatable
{
    // #region Properties (1)

    @MustContain(x => x > 3, "message", "message key", ValidationLevel.error, null, 15)
    public value: number[] | null = null;

    // #endregion
}
