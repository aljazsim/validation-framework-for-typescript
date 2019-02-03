import { MustBeTitleCase, Validatable, ValidationLevel } from "../../../source";

export class MustBeTitleCaseExample extends Validatable
{
    // #region Properties (1)

    @MustBeTitleCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
