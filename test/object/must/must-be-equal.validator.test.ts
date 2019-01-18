import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeEqualToValidator } from "../../../source/validators/object/must/must-be-equal-to.validator";
import { assert } from "chai";

describe("mustBeEqualTo", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeEqualToValidator("5", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), false);
        assert.equal(validator.isValid(undefined), false);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);

        assert.equal(validator.isValid("5"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeEqualToValidator(21, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be equal to 21.");
        assert.equal(validator.messageKey, "MustBeEqualTo");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeEqualToValidator("aaa", "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
