import { cannotMatch, Validatable, ValidationLevel } from "../../../source";

export class CannotMatchExample extends Validatable
{
    // #region Properties (1)

    @cannotMatch(new RegExp("[0-9]+"), "message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
