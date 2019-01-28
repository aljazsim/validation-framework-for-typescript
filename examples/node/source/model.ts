import { cannotBeNullOrEmpty, cannotBeOneOf, Validatable } from "validation-framework";

export class Model extends Validatable
{
    @cannotBeNullOrEmpty()
    @cannotBeOneOf(["A", "B"])
    public input: string | null = null;
}
