import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeFloatValidator } from "../../../source/validators/number/cannot/cannot-be-float.validator";
import { assert } from "chai";

describe("CannotBeFloat", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeFloatValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(1.1), false);
        assert.equal(validator.isValid(1.11), false);
        assert.equal(validator.isValid(1.111), true);
        assert.equal(validator.isValid(1.1111), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeFloatValidator(3, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be a float number precise to 3 decimal places.");
        assert.equal(validator.messageKey, "CannotBeFloat");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.maxDecimalPlaces, 3);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeFloatValidator(4, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
        assert.equal(validator.maxDecimalPlaces, 4);
    });
});
