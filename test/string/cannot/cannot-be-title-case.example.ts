import { CannotBeTitleCase, Validatable, ValidationLevel } from "../../../source";

export class CannotBeTitleCaseExample extends Validatable
{
    // #region Properties (1)

    @CannotBeTitleCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
