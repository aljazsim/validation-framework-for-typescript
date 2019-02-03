import { CannotBeNullOrWhitespace, MustBe, MustBeInteger, MustBeLongerThanOrEqualTo, MustBeShorterThanOrEqualTo, MustBeValidDate, MustMatch, Validatable } from "validation-framework";

export class AppModel extends Validatable
{
    // #region Properties (6)

    @MustBe(x => x === true, "You must agree to terms and conditions.")
    public agreeTermsAndConditions = false;

    @MustBeValidDate()
    // // @MustBeDateInThePast()
    public dateOfBirth = "";

    @MustMatch(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, "mustBeEmail")
    @CannotBeNullOrWhitespace("Required value.")
    public email = "";

    @MustMatch(/^[A-Z][a-z]*$/, "Invalid first name")
    @CannotBeNullOrWhitespace("Required value.")
    public firstName = "";

    @MustMatch(/^[A-Z][a-z]*$/, "Invalid last name.")
    @CannotBeNullOrWhitespace("Required value.")
    public lastName = "";

    @MustBeInteger()
    @MustBeLongerThanOrEqualTo(6)
    @MustBeShorterThanOrEqualTo(9)
    public phoneNumber = "";

    // #endregion
}
