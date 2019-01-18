import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeValidIntegerValidator } from "../../../source/validators/string/cannot/cannot-be-valid-integer.validator";
import { assert } from "chai";

describe("cannotBeValidDate", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeValidIntegerValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid("A"), true);
        assert.equal(validator.isValid("1"), false);
        assert.equal(validator.isValid("100"), false);
        assert.equal(validator.isValid("-100"), false);
        assert.equal(validator.isValid("1,1"), true);
        assert.equal(validator.isValid("1.1"), true);
        assert.equal(validator.isValid(".01"), true);
        assert.equal(validator.isValid("3.41"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeValidIntegerValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be a valid integer number.");
        assert.equal(validator.messageKey, "CannotBeValidInteger");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeValidIntegerValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
