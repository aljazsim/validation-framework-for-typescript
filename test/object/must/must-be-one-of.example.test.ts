import { MustBeOneOf, Validatable, ValidationLevel } from "../../../source";

export class MustBeOneOfExample extends Validatable
{
    // #region Properties (1)

    @MustBeOneOf(["a", "b", "c"], "message {0}", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
