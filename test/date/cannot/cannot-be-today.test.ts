import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeTodayValidator } from "../../../source/validators/date/cannot/cannot-be-today.validator";
import { assert } from "chai";

describe("CannotBeToday", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeTodayValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(now), false);
        assert.equal(validator.isValid(today), false);
        assert.equal(validator.isValid(yesterday), true);
        assert.equal(validator.isValid(tomorrow), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeTodayValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be today's date.");
        assert.equal(validator.messageKey, "CannotBeToday");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeTodayValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
