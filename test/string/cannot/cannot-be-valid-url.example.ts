import { cannotBeValidUrl, Validatable, ValidationLevel } from "../../../source";

export class CannotBeValidUrlExample extends Validatable
{
    // #region Properties (1)

    @cannotBeValidUrl("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
