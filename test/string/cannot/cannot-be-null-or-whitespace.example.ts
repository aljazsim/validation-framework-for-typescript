import { CannotBeNullOrWhitespace, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullOrWhitespaceExample extends Validatable
{
    // #region Properties (1)

    @CannotBeNullOrWhitespace("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
