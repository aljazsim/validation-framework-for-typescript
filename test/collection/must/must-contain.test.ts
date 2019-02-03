import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustContainValidator } from "../../../source/validators/collection/must/must-contain.validator";
import { assert2 } from "../../assert2";
import { MustContainExample } from "./must-contain.example";
import { assert } from "chai";

describe("MustContain", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustContainValidator(x => x > 3, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid([1]), false);
        assert.equal(validator.isValid([1, 2]), false);
        assert.equal(validator.isValid([1, 2, 3]), false);
        assert.equal(validator.isValid([1, 2, 4]), true);
        assert.equal(validator.isValid(4), true);
        assert.equal(validator.isValid("4"), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustContainValidator(x => x !== null, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must contain the specified expression.");
        assert.equal(validator.messageKey, "MustContain");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustContainValidator(x => [1, 2, 3].indexOf(x) > -1, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustContainExample();

        validatable.value = [1, 2, 3];

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

        validatable.value = [1, 2, 3, 4];

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("value"), true);
        assert.equal(validatable.validate("value").length, 0);
    });
});
