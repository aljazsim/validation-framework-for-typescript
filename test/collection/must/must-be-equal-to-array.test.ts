import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeEqualToArrayValidator } from "../../../source/validators/collection/must/must-be-equal-to-array.validator";
import { assert } from "chai";

describe("MustBeEqualToArray", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeEqualToArrayValidator([1, 2, 3], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid([1, 2, 3]), true);
        assert.equal(validator.isValid(["1", "2", "3"]), false);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeEqualToArrayValidator([1], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be equal to [1].");
        assert.equal(validator.messageKey, "MustBeEqualToArray");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeEqualToArrayValidator([], "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
