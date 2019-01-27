import { mustBeNullOrEmpty, Validatable, ValidationLevel } from "../../../source";

export class MustBeNullOrEmptyExample extends Validatable
{
    // #region Properties (1)

    @mustBeNullOrEmpty("message", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @mustBeNullOrEmpty("message", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
