import { cannotBeLessThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLessThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @cannotBeLessThanOrEqualTo(3, "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: number | null = null;

    // #endregion
}
