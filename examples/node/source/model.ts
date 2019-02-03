import { Validatable } from "validation-framework";

export class Model extends Validatable
{
    @MustBeNullOrEmpty()
    @MustBeOneOf(["A", "B"])
    public input: string | null = null;
}
