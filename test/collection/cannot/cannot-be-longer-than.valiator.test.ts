import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeLongerThanValidator } from "../../../source/validators/collection/cannot/cannot-be-longer-than.validator";
import { assert } from "chai";

describe("CannotBeLongerThan", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeLongerThanValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid(["a", "b"]), true);
        assert.equal(validator.isValid([1, 2, 3]), false);
        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid("ab"), true);
        assert.equal(validator.isValid("abc"), false);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeLongerThanValidator(5, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be longer than 5 items.");
        assert.equal(validator.messageKey, "CannotBeLongerThan");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeLongerThanValidator(1, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
