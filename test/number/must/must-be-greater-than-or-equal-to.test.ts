import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeGreaterThanOrEqualToValidator } from "../../../source/validators/number/must/must-be-greater-than-or-equal-to.validator";
import { assert2 } from "../../assert2";
import { MustBeGreaterThanOrEqualToExample } from "./must-be-greater-than-or-equal-to.example";
import { assert } from "chai";

describe("MustBeInteger", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeGreaterThanOrEqualToValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), false);
        assert.equal(validator.isValid(0), false);
        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(1.9), false);
        assert.equal(validator.isValid(2), true);
        assert.equal(validator.isValid(2.1), true);
        assert.equal(validator.isValid(3), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new MustBeGreaterThanOrEqualToValidator("2", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), false);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid("0"), false);
        assert.equal(validator.isValid("1"), false);
        assert.equal(validator.isValid("2"), true);
        assert.equal(validator.isValid("3"), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeGreaterThanOrEqualToValidator(5, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be greater than or equal to 5.");
        assert.equal(validator.messageKey, "MustBeGreaterThanOrEqualTo");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, 5);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeGreaterThanOrEqualToValidator(15, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
        assert.equal(validator.minValue, 15);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeGreaterThanOrEqualToExample();

        validatable.name = 2;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 3", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = 2.9;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 3", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = 3;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
