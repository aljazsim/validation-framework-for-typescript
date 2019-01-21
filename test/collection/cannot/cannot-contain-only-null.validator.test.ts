import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotContainOnlyNullValidator } from "../../../source/validators/collection/cannot/cannot-contain-only-null.validator";
import { assert } from "chai";

describe("CannotContainOnlyNull", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotContainOnlyNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid(["a", "b"]), true);
        assert.equal(validator.isValid(["a", "b", "a"]), true);
        assert.equal(validator.isValid(["a", null, "a"]), true);
        assert.equal(validator.isValid(["a", null, null]), true);
        assert.equal(validator.isValid(["a", undefined, null]), true);
        assert.equal(validator.isValid(["a", undefined, undefined]), true);
        assert.equal(validator.isValid([null]), false);
        assert.equal(validator.isValid([null, undefined]), false);
        assert.equal(validator.isValid([null, undefined, undefined]), false);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotContainOnlyNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot contain only null.");
        assert.equal(validator.messageKey, "CannotContainOnlyNull");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotContainOnlyNullValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
