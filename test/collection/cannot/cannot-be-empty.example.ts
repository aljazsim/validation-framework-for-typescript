import { CannotBeEmpty, Validatable, ValidationLevel } from "../../../source";

export class CannotBeEmptyExample extends Validatable
{
    // #region Properties (1)

    @CannotBeEmpty("message", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @CannotBeEmpty("message", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
