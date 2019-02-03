import { cannotBeNullOrWhitespace, mustMatch, Validatable } from "validation-framework";

export class AppModel extends Validatable
{
    @mustMatch(/^[A-Z][a-z]*$/, "", "invalidEmailAddress")
    @cannotBeNullOrWhitespace("Required value.")
    public name = "";
}
