import { Validatable, ValidationLevel } from "../../../source";
import { CannotBeValidUrl } from "../../../source/validators/string/cannot/cannot-be-valid-url.decorator";

export class CannotBeValidUrlExample extends Validatable
{
    // #region Properties (1)

    @CannotBeValidUrl("message", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
