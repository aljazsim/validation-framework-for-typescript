import { Validatable, ValidationLevel } from "../../../source";
import { MustBeValidUrl } from "../../../source/validators/string/must/must-be-valid-url.decorator";

export class MustBeValidUrlExample extends Validatable
{
    // #region Properties (1)

    @MustBeValidUrl("message", "message key", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
