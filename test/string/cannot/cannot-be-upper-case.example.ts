import { cannotBeUpperCase, Validatable, ValidationLevel } from "../../../source";

export class CannotBeUpperCaseExample extends Validatable
{
    // #region Properties (1)

    @cannotBeUpperCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
