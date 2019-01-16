import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeOneOfValidator } from "../../../source/validators/object/cannot/cannot-be-one-of.validator";
import { assert } from "chai";

describe("cannotBeOneOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeOneOfValidator([1, 2, "3"], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("3"), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeOneOfValidator([21], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be one of 21.");
        assert.equal(validator.messageKey, "CannotBeOneOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeOneOfValidator(["aaa"], "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
