import { CannotBeNullOrWhitespace, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullOrWhitespaceExample extends Validatable
{
    // #region Properties (1)

    @CannotBeNullOrWhitespace("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
