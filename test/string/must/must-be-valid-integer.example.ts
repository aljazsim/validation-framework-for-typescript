import { mustBeValidInteger, Validatable, ValidationLevel } from "../../../source";

export class MustBeValidIntegerExample extends Validatable
{
    // #region Properties (1)

    @mustBeValidInteger("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
