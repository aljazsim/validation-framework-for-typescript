import { Validatable } from "../source";
import { cannotBeNull } from "../source/validators/object/cannot/cannot-be-null.decorator";
import { mustBeOneOf } from "../source/validators/object/must/must-be-one-of.decorator";

export class ValidatableTest extends Validatable
{
    // #region Properties (1)

    @cannotBeNull()
    @mustBeOneOf(["a", "b", "c"])
    public name: string = null;

    public getActiveValidationContexts(): string[]
    {
        return ["New"];
    }

    // #endregion

}
