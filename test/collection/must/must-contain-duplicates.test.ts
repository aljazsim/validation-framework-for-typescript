import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustContainDuplicatesValidator } from "../../../source/validators/collection/must/must-contain-duplicates.validator";
import { assert2 } from "../../assert2";
import { MustContainDuplicatesExample } from "./must-contain-duplicates.example";
import { assert } from "chai";

describe("MustContainDuplicates", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustContainDuplicatesValidator(null, ValidationLevel.error, ValidationContext.default, 0);

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
        let validator = new MustContainDuplicatesValidator(null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must contain duplicates.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustContainDuplicatesValidator("Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustContainDuplicatesExample();

        validatable.value = [1, 2, 3];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "value", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("value"), false);
        assert.equal(validatable.validate("value").length, 1);

        validatable.value = [1];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "value", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("value"), false);
        assert.equal(validatable.validate("value").length, 1);

        validatable.value = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value"), true);
        assert.equal(validatable.validate("value").length, 0);

        validatable.value = [1, 2, 2];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value"), true);
        assert.equal(validatable.validate("value").length, 0);
    });
});
