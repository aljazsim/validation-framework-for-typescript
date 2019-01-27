import { mustBeEqualToArray, Validatable, ValidationLevel } from "../../../source";

export class MustBeEqualToArrayExample extends Validatable
{
    // #region Properties (1)

    @mustBeEqualToArray([1, 2, 3], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value1: number[] | null = null;

    @mustBeEqualToArray([1, 2, 3], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value2: number[] | null = null;

    // #endregion
}
