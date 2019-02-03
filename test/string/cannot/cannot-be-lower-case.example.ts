import { CannotBeLowerCase, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLowerCaseExample extends Validatable
{
    // #region Properties (1)

    @CannotBeLowerCase("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
