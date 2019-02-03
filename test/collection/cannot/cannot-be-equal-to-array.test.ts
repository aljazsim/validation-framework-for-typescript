import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeEqualToArrayValidator } from "../../../source/validators/collection/cannot/cannot-be-equal-to-array.validator";
import { assert2 } from "../../assert2";
import { CannotBeEqualToArrayExample } from "./cannot-be-equal-to-array.example";
import { assert } from "chai";

describe("CannotBeEqualToArray", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeEqualToArrayValidator([1, 2, 3], true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid([1, 3, 2]), false);
        assert.equal(validator.isValid(["1", "2", "3"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new CannotBeEqualToArrayValidator([1, 2, 3], false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid([1, 3, 2]), true);
        assert.equal(validator.isValid(["1", "2", "3"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        let validator2 = new CannotBeEqualToArrayValidator(<(number | null)[]>[null, undefined], true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator2.isValid(null), true);
        assert.equal(validator2.isValid(undefined), true);
        assert.equal(validator2.isValid(""), true);
        assert.equal(validator2.isValid([]), true);

        assert.equal(validator2.isValid([null]), true);
        assert.equal(validator2.isValid([undefined]), true);
        assert.equal(validator2.isValid([null, undefined]), false);
        assert.equal(validator2.isValid([undefined, null]), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeEqualToArrayValidator([1], false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be equal to [1].");
        assert.equal(validator.messageKey, "CannotBeEqualToArray");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeEqualToArrayValidator([], false, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeEqualToArrayExample();

        validatable.value1 = [1, 3, 2];
        validatable.value2 = [1, 2, 3];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 2);
        assert2.equal(validatable.validate().get(0), validatable, "value1", "message [1, 2, 3]", null, ValidationLevel.error, 15);
        assert2.equal(validatable.validate().get(1), validatable, "value2", "message [1, 2, 3]", null, ValidationLevel.error, 15);

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

        validatable.value1 = [1];
        validatable.value2 = [0, 2, 3];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value1"), true);
        assert.equal(validatable.validate("value1").length, 0);
        assert.equal(validatable.isValid("value2"), true);
        assert.equal(validatable.validate("value2").length, 0);
    });
});
