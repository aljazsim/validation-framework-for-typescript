import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeEqualToValidator } from "../../../source/validators/object/cannot/cannot-be-equal-to.validator";
import { assert } from "chai";

describe("cannotBeEqualTo", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeEqualToValidator("5", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("5"), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeEqualToValidator(21, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be equal to 21.");
        assert.equal(validator.messageKey, "CannotBeEqualTo");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeEqualToValidator("aaa", "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
