import { CannotBeShorterThanOrEqualTo, Validatable, ValidationLevel } from "../../../source";

export class CannotBeShorterThanOrEqualToExample extends Validatable
{
    // #region Properties (1)

    @CannotBeShorterThanOrEqualTo(3, "message {0}", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @CannotBeShorterThanOrEqualTo(3, "message {0}", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
