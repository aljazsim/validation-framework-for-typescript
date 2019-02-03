import { MustBeLowerCase, Validatable, ValidationLevel } from "../../../source";

export class MustBeLowerCaseExample extends Validatable
{
    // #region Properties (1)

    @MustBeLowerCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
