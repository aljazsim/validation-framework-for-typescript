import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeLessThanValidator } from "../../../source/validators/number/must/must-be-less-than.validator";
import { assert } from "chai";

describe("MustBeInteger", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeLessThanValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), true);
        assert.equal(validator.isValid(0), true);
        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid(1.9), true);
        assert.equal(validator.isValid(2), false);
        assert.equal(validator.isValid(2.1), false);
        assert.equal(validator.isValid(3), false);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeLessThanValidator(5, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be less than 5.");
        assert.equal(validator.messageKey, "MustBeLessThan");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.maxValue, 5);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeLessThanValidator(15, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
        assert.equal(validator.maxValue, 15);
    });
});
