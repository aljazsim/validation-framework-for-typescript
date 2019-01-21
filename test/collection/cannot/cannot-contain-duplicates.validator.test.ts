import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotContainDuplicatesValidator } from "../../../source/validators/collection/cannot/cannot-contain-duplicates.validator";
import { assert } from "chai";

describe("CannotContainDuplicates", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotContainDuplicatesValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid(["a", "b"]), true);
        assert.equal(validator.isValid(["a", "b", "a"]), false);
        assert.equal(validator.isValid(["a", null, "a"]), false);
        assert.equal(validator.isValid(["a", null, null]), false);
        assert.equal(validator.isValid(["a", undefined, null]), true);
        assert.equal(validator.isValid(["a", undefined, undefined]), false);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotContainDuplicatesValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot contain duplicates.");
        assert.equal(validator.messageKey, "CannotContainDuplicates");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotContainDuplicatesValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
