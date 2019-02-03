import { MustBeNullOrEmpty, Validatable, ValidationLevel } from "../../../source";

export class MustBeNullOrEmptyExample extends Validatable
{
    // #region Properties (1)

    @MustBeNullOrEmpty("message", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @MustBeNullOrEmpty("message", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
