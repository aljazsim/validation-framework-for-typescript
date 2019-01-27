import { mustBeDateInThePast, Validatable, ValidationLevel } from "../../../source";

export class MustBeDateInThePastExample extends Validatable
{
    // #region Properties (1)

    @mustBeDateInThePast("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
