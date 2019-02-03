import { CannotBeLongerThan, Validatable, ValidationLevel } from "../../../source";

export class CannotBeLongerThanExample extends Validatable
{
    // #region Properties (1)

    @CannotBeLongerThan(3, "message {0}", ValidationLevel.error, null, 15)
    public arrayValue: number[] | null = null;

    @CannotBeLongerThan(3, "message {0}", ValidationLevel.error, null, 15)
    public stringValue: string | null = null;

    // #endregion
}
