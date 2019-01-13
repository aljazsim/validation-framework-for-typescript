import { cannotBeNull, Validatable } from "../../../source";

export class CannotBeNullValidatable extends Validatable
{
    @cannotBeNull()
    public name: string | null = null;
}
