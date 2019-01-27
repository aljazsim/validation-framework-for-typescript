import { cannotBeEmpty, Validatable, ValidationLevel } from "../../../source";

export class CannotBeEmptyExample extends Validatable
{
    // #region Properties (1)

    @cannotBeEmpty("message", "message key", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @cannotBeEmpty("message", "message key", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
