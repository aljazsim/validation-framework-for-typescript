import { CannotBeNullOrEmpty, Validatable, ValidationLevel } from "../../../source";

export class CannotBeNullOrEmptyExample extends Validatable
{
    // #region Properties (1)

    @CannotBeNullOrEmpty("message", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @CannotBeNullOrEmpty("message", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
