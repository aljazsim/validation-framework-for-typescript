import { mustBeDateInTheFuture, Validatable, ValidationLevel } from "../../../source";

export class MustBeDateInTheFutureExample extends Validatable
{
    // #region Properties (1)

    @mustBeDateInTheFuture("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
