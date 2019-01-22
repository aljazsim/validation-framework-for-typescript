import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeBetweenValidator } from "../../../source/validators/number/cannot/cannot-be-between.validator";
import { assert } from "chai";

describe("CannotBeBetween", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeBetweenValidator(0, 3, true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), true);
        assert.equal(validator.isValid(0), false);
        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(2), false);
        assert.equal(validator.isValid(3), false);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new CannotBeBetweenValidator(0, 3, false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), true);
        assert.equal(validator.isValid(0), true);
        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(2), false);
        assert.equal(validator.isValid(3), true);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeBetweenValidator(-1, 1, true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be between -1 and 1 inclusive.");
        assert.equal(validator.messageKey, "CannotBeBetween");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, true);

        validator = new CannotBeBetweenValidator(-1, 1, false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be between -1 and 1.");
        assert.equal(validator.messageKey, "CannotBeBetween");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, false);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeBetweenValidator(5, 6, true, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);

        assert.equal(validator.minValue, 5);
        assert.equal(validator.maxValue, 6);
        assert.equal(validator.inclusive, true);
    });
});
