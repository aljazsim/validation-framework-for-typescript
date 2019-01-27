import { mustMatch, Validatable, ValidationLevel } from "../../../source";

export class MustMatchExample extends Validatable
{
    // #region Properties (1)

    @mustMatch(new RegExp("[0-9]+"), "message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
