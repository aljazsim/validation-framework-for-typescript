import { mustBeEqualTo, Validatable, ValidationLevel } from "../../../source";

export class MustBeEqualToExample extends Validatable
{
    // #region Properties (1)

    @mustBeEqualTo(11, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
