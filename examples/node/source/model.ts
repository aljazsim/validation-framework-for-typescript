import { MustBeNullOrEmpty, MustBeOneOf, Validatable } from "validation-framework-ts";

export class Model extends Validatable
{
    @MustBeNullOrEmpty()
    @MustBeOneOf(["A", "B"])
    public input: string | null = null;
}
