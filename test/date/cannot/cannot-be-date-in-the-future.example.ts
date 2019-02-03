import { CannotBeDateInTheFuture, Validatable, ValidationLevel } from "../../../source";

export class CannotBeDateInTheFutureExample extends Validatable
{
    // #region Properties (1)

    @CannotBeDateInTheFuture("message", "message key", ValidationLevel.error, null, 15)
    public name: Date | null = null;

    // #endregion
}
