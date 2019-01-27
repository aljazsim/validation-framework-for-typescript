import { cannotBeLowerCase, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLowerCaseExample extends Validatable
{
    // #region Properties (1)

    @cannotBeLowerCase("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
