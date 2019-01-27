import { cannotBeNullOrWhitespace, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullOrWhitespaceExample extends Validatable
{
    // #region Properties (1)

    @cannotBeNullOrWhitespace("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
