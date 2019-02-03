import { CannotBeEqualToArray, Validatable, ValidationLevel } from "../../../source";

export class CannotBeEqualToArrayExample extends Validatable
{
    // #region Properties (1)

    @CannotBeEqualToArray([1, 2, 3], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value1: number[] | null = null;

    @CannotBeEqualToArray([1, 2, 3], true, "message {0}", "message key", ValidationLevel.error, null, 15)
    public value2: number[] | null = null;

    // #endregion
}
