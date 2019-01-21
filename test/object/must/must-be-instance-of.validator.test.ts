import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeInstanceOfValidator } from "../../../source/validators/object/must/must-be-instance-of.validator";
import { assert } from "chai";

describe("mustInstanceOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeInstanceOfValidator(Error, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);
        assert.equal(validator.isValid(new Error()), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeInstanceOfValidator(Array, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be instance of Array.");
        assert.equal(validator.messageKey, "MustBeInstanceOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeInstanceOfValidator(Date, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    // // it("should validate", () =>
    // // {
    // //     let validatable: MustInstanceOfValidatable = new MustInstanceOfValidatable();

    // //     validatable.name1 = null;
    // //     validatable.name2 = null;

    // //     assert.equal(validatable.isValid(), true);
    // //     assert.equal(validatable.isValid("name1"), true);
    // //     assert.equal(validatable.isValid("name2"), false);

    // //     assert.equal(validatable.validate("name1").length, 1);
    // //     assert2.equal(validatable.validate("name1")[0], "name1", "Value must be null.", "MustInstanceOf", [], ValidationContext.default, ValidationLevel.error, 0, validatable);
    // //     assert.equal(validatable.validate("name2").length, 1);
    // //     assert2.equal(validatable.validate("name2")[0], "name2", "Message1", "Message1Key", [], "context", ValidationLevel.warning, 5, validatable);

    // //     validatable.name1 = undefined;
    // //     validatable.name2 = undefined;

    // //     assert.equal(validatable.isValid(), true);
    // //     assert.equal(validatable.isValid("name1"), true);
    // //     assert.equal(validatable.isValid("name2"), false);

    // //     assert.equal(validatable.validate("name1").length, 1);
    // //     assert2.equal(validatable.validate("name1")[0], "name1", "Value must be null.", "MustInstanceOf", [], ValidationContext.default, ValidationLevel.error, 0, validatable);
    // //     assert.equal(validatable.validate("name2").length, 1);
    // //     assert2.equal(validatable.validate("name2")[0], "name2", "Message1", "Message1Key", [], "context", ValidationLevel.warning, 5, validatable);

    // //     validatable.name1 = "test1";
    // //     validatable.name2 = "test2";

    // //     assert.equal(validatable.isValid(), false);
    // //     assert.equal(validatable.isValid("name1"), false);
    // //     assert.equal(validatable.isValid("name2"), false);

    // //     assert.equal(validatable.validate("name1").length, 0);
    // //     assert.equal(validatable.validate("name2").length, 0);
    // // });
});