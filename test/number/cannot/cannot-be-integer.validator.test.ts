import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeIntegerValidator } from "../../../source/validators/number/cannot/cannot-be-integer.validator";
import { assert } from "chai";

describe("CannotBeInteger", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeIntegerValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(0), false);
        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(1.1), true);
        assert.equal(validator.isValid(1.11), true);
        assert.equal(validator.isValid(1.111), true);
        assert.equal(validator.isValid(1.1111), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeIntegerValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be an integer number.");
        assert.equal(validator.messageKey, "CannotBeInteger");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeIntegerValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
