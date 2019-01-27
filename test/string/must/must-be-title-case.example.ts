import { mustBeTitleCase, Validatable, ValidationLevel } from "../../../source";

export class MustBeTitleCaseExample extends Validatable
{
    // #region Properties (1)

    @mustBeTitleCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
