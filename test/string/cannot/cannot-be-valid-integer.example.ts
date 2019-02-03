import { CannotBeValidInteger, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidIntegerExample extends Validatable
{
    // #region Properties (1)

    @CannotBeValidInteger("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
