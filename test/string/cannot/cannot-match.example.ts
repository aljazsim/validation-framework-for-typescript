import { CannotMatch, Validatable, ValidationLevel } from "../../../source";

export class CannotMatchExample extends Validatable
{
    // #region Properties (1)

    @CannotMatch(new RegExp("[0-9]+"), "message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
