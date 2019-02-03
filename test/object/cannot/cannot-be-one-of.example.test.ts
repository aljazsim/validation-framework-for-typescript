import { Validatable, ValidationLevel } from "../../../source";
import { CannotBeOneOf } from "../../../source/validators/object/cannot/cannot-be-one-of.decorator";

export class CannotBeOneOfExample extends Validatable
{
    // #region Properties (1)

    @CannotBeOneOf(["a", "b", "c"], "message {0}", ValidationLevel.error, null, 15)
    public name: string | null = null;

    // #endregion
}
