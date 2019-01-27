import { cannotBeDateInThePast, Validatable, ValidationLevel } from "../../../source";

export class CannotBeDateInThePastExample extends Validatable
{
    // #region Properties (1)

    @cannotBeDateInThePast("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
