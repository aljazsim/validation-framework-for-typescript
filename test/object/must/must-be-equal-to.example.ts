import { MustBeEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeEqualToExample extends Validatable
{
    // #region Properties (1)

    @MustBeEqualTo(11, "message {0}", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
