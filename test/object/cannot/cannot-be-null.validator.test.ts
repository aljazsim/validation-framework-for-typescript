import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeNullValidator } from "../../../source/validators/object/cannot/cannot-be-null.validator";
import { assert } from "chai";

describe("cannotBeNull", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), false);
        assert.equal(validator.isValid(undefined), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be null.");
        assert.equal(validator.messageKey, "CannotBeNull");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeNullValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    // // it("should validate", () =>
    // // {
    // //     let validatable: CannotBeNullValidatable = new CannotBeNullValidatable();

    // //     validatable.name1 = null;
    // //     validatable.name2 = null;

    // //     assert.equal(validatable.isValid(), false);
    // //     assert.equal(validatable.isValid("name1"), false);
    // //     assert.equal(validatable.isValid("name2"), true);

    // //     assert.equal(validatable.validate("name1").length, 1);
    // //     assert2.equal(validatable.validate("name1")[0], "name1", "Value cannot be null.", "CannotBeNull", [], ValidationContext.default, ValidationLevel.error, 0, validatable);
    // //     assert.equal(validatable.validate("name2").length, 1);
    // //     assert2.equal(validatable.validate("name2")[0], "name2", "Message1", "Message1Key", [], "context", ValidationLevel.warning, 5, validatable);

    // //     validatable.name1 = undefined;
    // //     validatable.name2 = undefined;

    // //     assert.equal(validatable.isValid(), false);
    // //     assert.equal(validatable.isValid("name1"), false);
    // //     assert.equal(validatable.isValid("name2"), true);

    // //     assert.equal(validatable.validate("name1").length, 1);
    // //     assert2.equal(validatable.validate("name1")[0], "name1", "Value cannot be null.", "CannotBeNull", [], ValidationContext.default, ValidationLevel.error, 0, validatable);
    // //     assert.equal(validatable.validate("name2").length, 1);
    // //     assert2.equal(validatable.validate("name2")[0], "name2", "Message1", "Message1Key", [], "context", ValidationLevel.warning, 5, validatable);

    // //     validatable.name1 = "test1";
    // //     validatable.name2 = "test2";

    // //     assert.equal(validatable.isValid(), true);
    // //     assert.equal(validatable.isValid("name1"), true);
    // //     assert.equal(validatable.isValid("name2"), true);

    // //     assert.equal(validatable.validate("name1").length, 0);
    // //     assert.equal(validatable.validate("name2").length, 0);
    // // });
});