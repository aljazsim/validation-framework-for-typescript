import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeOneOfValidator } from "../../../source/validators/object/must/must-be-one-of.validator";
import { assert } from "chai";

describe("mustBeOneOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeOneOfValidator([1, 2, "3"], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), false);
        assert.equal(validator.isValid(undefined), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);

        assert.equal(validator.isValid("3"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeOneOfValidator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be one of: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...].");
        assert.equal(validator.messageKey, "MustBeOneOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeOneOfValidator(["aaa"], "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
