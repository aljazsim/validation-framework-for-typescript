import { Validatable, ValidationLevel } from "../../../source";
import { cannotBeValidUrl } from "../../../source/validators/string/cannot/cannot-be-valid-url.decorator";

export class CannotBeValidUrlExample extends Validatable
{
    // #region Properties (1)

    @cannotBeValidUrl("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
