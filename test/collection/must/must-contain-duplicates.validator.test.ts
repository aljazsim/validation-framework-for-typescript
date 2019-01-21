import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustContainDuplicatesValidator } from "../../../source/validators/collection/must/must-contain-duplicates.validator";
import { assert } from "chai";

describe("MustContainDuplicates", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustContainDuplicatesValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), false);
        assert.equal(validator.isValid(["a", "b"]), false);
        assert.equal(validator.isValid(["a", "b", "a"]), true);
        assert.equal(validator.isValid(["a", null, "a"]), true);
        assert.equal(validator.isValid(["a", null, null]), true);
        assert.equal(validator.isValid(["a", undefined, null]), false);
        assert.equal(validator.isValid(["a", undefined, undefined]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustContainDuplicatesValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must contain duplicates.");
        assert.equal(validator.messageKey, "MustContainDuplicates");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustContainDuplicatesValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
