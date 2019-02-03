import { MustBeDateInThePast, Validatable, ValidationLevel } from "../../../source";

export class MustBeDateInThePastExample extends Validatable
{
    // #region Properties (1)

    @MustBeDateInThePast("message", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
