import { CannotBeUpperCase, Validatable, ValidationLevel } from "../../../source";

export class CannotBeUpperCaseExample extends Validatable
{
    // #region Properties (1)

    @CannotBeUpperCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
