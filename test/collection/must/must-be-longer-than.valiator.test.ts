import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeLongerThanValidator } from "../../../source/validators/collection/must/must-be-longer-than.validator";
import { assert } from "chai";

describe("MustBeLongerThan", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeLongerThanValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), false);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid(["a"]), false);
        assert.equal(validator.isValid(["a", "b"]), true);
        assert.equal(validator.isValid([1, 2, 3]), true);
        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("ab"), true);
        assert.equal(validator.isValid("abc"), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeLongerThanValidator(5, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be longer than 5 items.");
        assert.equal(validator.messageKey, "MustBeLongerThan");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeLongerThanValidator(1, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
