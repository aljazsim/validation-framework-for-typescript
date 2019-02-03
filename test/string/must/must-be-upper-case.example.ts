import { MustBeUpperCase, Validatable, ValidationLevel } from "../../../source";

export class MustBeUpperCaseExample extends Validatable
{
    // #region Properties (1)

    @MustBeUpperCase("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
