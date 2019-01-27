import { mustBeUpperCase, Validatable, ValidationLevel } from "../../../source";

export class MustBeUpperCaseExample extends Validatable
{
    // #region Properties (1)

    @mustBeUpperCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
