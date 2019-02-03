import { MustBeEmpty, Validatable, ValidationLevel } from "../../../source";

export class MustBeEmptyExample extends Validatable
{
    // #region Properties (1)

    @MustBeEmpty("message", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeEmpty("message", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
