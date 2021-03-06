import { MustContainDuplicates, Validatable, ValidationLevel } from "../../../source";

export class MustContainDuplicatesExample extends Validatable
{
    // #region Properties (1)

    @MustContainDuplicates("message", ValidationLevel.error, null, 15)
    public value: number[] | null = null;

    // #endregion
}
