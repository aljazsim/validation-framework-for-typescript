import { mustBeEqualToArray, Validatable, ValidationLevel } from "../../../source";

export class MustBeEqualToArrayExample extends Validatable
{
    // #region Properties (1)

    @mustBeEqualToArray([1, 2, 3, null], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value1: (number | null)[] | null = null;

    @mustBeEqualToArray([1, 2, 3, undefined], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value2: (number | undefined)[] | null = null;

    // #endregion
}
