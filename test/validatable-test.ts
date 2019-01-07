import { Validatable } from "../source";
import { valueCannotBeNull } from "../source/validators/object/cannot/cannot-be-null.decorator";
import { valueMustBeOneOf } from "../source/validators/object/must/must-be-one-of.decorator";
import { cannotBeNull } from "defensive-programming-framework";

export class ValidatableTest extends Validatable
{
    // #region Properties (1)

    @valueCannotBeNull()
    @valueMustBeOneOf(["a", "b", "c"])
    public name: string = null;

    public getActiveValidationContexts(): string[]
    {
        cannotBeNull(null);
        return ["New"];
    }

    // #endregion

}
