import { mustBeValidUrl, Validatable, ValidationLevel } from "../../../source";

export class MustBeValidUrlExample extends Validatable
{
    // #region Properties (1)

    @mustBeValidUrl("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
