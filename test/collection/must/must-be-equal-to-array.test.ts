import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeEqualToArrayValidator } from "../../../source/validators/collection/must/must-be-equal-to-array.validator";
import { assert2 } from "../../assert2";
import { MustBeEqualToArrayExample } from "./must-be-equal-to-array.example";
import { assert } from "chai";

describe("MustBeEqualToArray", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeEqualToArrayValidator([1, 2, 3], true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid([1, 3, 2]), true);
        assert.equal(validator.isValid(["1", "2", "3"]), false);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new MustBeEqualToArrayValidator([1, 2, 3], false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid([1, 3, 2]), false);
        assert.equal(validator.isValid(["1", "2", "3"]), false);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeEqualToArrayValidator([1], false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be equal to [1].");
        assert.equal(validator.messageKey, "MustBeEqualToArray");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeEqualToArrayValidator([], false, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeEqualToArrayExample();

        validatable.value1 = [1, 2];
        validatable.value2 = [1, 3];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 2);
        assert2.equal(validatable.validate()[0], validatable, "value1", "message [1, 2, 3]", null, ValidationLevel.error, 15);
        assert2.equal(validatable.validate()[1], validatable, "value2", "message [1, 2, 3]", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("value1"), false);
        assert.equal(validatable.validate("value1").length, 1);
        assert.equal(validatable.isValid("value2"), false);
        assert.equal(validatable.validate("value2").length, 1);

        validatable.value1 = null;
        validatable.value2 = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value1"), true);
        assert.equal(validatable.validate("value1").length, 0);
        assert.equal(validatable.isValid("value2"), true);
        assert.equal(validatable.validate("value2").length, 0);

        validatable.value1 = [1, 2, 3];
        validatable.value2 = [1, 3, 2];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value1"), true);
        assert.equal(validatable.validate("value1").length, 0);
        assert.equal(validatable.isValid("value2"), true);
        assert.equal(validatable.validate("value2").length, 0);
    });
});
