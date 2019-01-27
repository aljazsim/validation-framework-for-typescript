import { mustBeNullOrWhitespace, Validatable, ValidationLevel } from "../../../source";

export class MustBeNullOrWhitespaceExample extends Validatable
{
    // #region Properties (1)

    @mustBeNullOrWhitespace("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
