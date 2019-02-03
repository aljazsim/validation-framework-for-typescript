import { MustMatch, Validatable, ValidationLevel } from "../../../source";

export class MustMatchExample extends Validatable
{
    // #region Properties (1)

    @MustMatch(new RegExp("[0-9]+"), "message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
