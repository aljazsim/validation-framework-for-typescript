import { CannotContainDuplicates, Validatable, ValidationLevel } from "../../../source";

export class CannotContainDuplicatesExample extends Validatable
{
    // #region Properties (1)

    @CannotContainDuplicates("message", "message key", ValidationLevel.error, null, 15)
    public value: number[] | null = null;

    // #endregion
}
