import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeFloatValidator } from "../../../source/validators/number/must/must-be-float.validator";
import { assert } from "chai";

describe("MustBeFloat", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeFloatValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid(1.1), true);
        assert.equal(validator.isValid(1.11), true);
        assert.equal(validator.isValid(1.111), false);
        assert.equal(validator.isValid(1.1111), false);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeFloatValidator(3, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be a float number precise to 3 decimal places.");
        assert.equal(validator.messageKey, "MustBeFloat");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.maxDecimalPlaces, 3);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeFloatValidator(4, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
        assert.equal(validator.maxDecimalPlaces, 4);
    });
});
