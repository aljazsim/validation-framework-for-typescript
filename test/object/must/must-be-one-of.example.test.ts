import { mustBeOneOf, Validatable, ValidationLevel } from "../../../source";

export class MustBeOneOfExample extends Validatable
{
    // #region Properties (1)

    @mustBeOneOf(["a", "b", "c"], "message {0}", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}