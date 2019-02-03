import { CannotBeNullOrWhitespace, MustMatch, Validatable } from "validation-framework";

export class AppModel extends Validatable
{
    @MustMatch(/^[A-Z][a-z]*$/, "", "invalidEmailAddress")
    @CannotBeNullOrWhitespace("Required value.")
    public name = "";
}
