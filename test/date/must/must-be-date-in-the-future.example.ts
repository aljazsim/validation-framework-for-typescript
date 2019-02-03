import { MustBeDateInTheFuture, Validatable, ValidationLevel } from "../../../source";

export class MustBeDateInTheFutureExample extends Validatable
{
    // #region Properties (1)

    @MustBeDateInTheFuture("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
