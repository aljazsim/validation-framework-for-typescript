import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeShorterThanOrEqualToValidator } from "../../../source/validators/collection/must/must-be-shorter-than-or-equal-to.validator";
import { assert2 } from "../../assert2";
import { MustBeShorterThanOrEqualToExample } from "./cannot-be-shorter-than-or-equal-to.example";
import { assert } from "chai";

describe("MustBeShorterThanOrEqualTo", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeShorterThanOrEqualToValidator(2, null, null, ValidationLevel.error, ValidationContext.default, 0);

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
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeShorterThanOrEqualToValidator(5, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be shorter than or equal to 5 items.");
        assert.equal(validator.messageKey, "MustBeShorterThanOrEqualTo");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeShorterThanOrEqualToValidator(1, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeShorterThanOrEqualToExample();

        validatable.arrayValue = [1, 2, 3, 4];
        validatable.stringValue = "abcd";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 2);
        assert2.equal(validatable.validate()[0], validatable, "arrayValue", "message 3", null, ValidationLevel.error, 15);
        assert2.equal(validatable.validate()[1], validatable, "stringValue", "message 3", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("arrayValue"), false);
        assert.equal(validatable.validate("arrayValue").length, 1);

        assert.equal(validatable.isValid("stringValue"), false);
        assert.equal(validatable.validate("stringValue").length, 1);

        validatable.arrayValue = null;
        validatable.stringValue = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("arrayValue"), true);
        assert.equal(validatable.validate("arrayValue").length, 0);
        assert.equal(validatable.isValid("stringValue"), true);
        assert.equal(validatable.validate("stringValue").length, 0);

        validatable.arrayValue = [1, 2];
        validatable.stringValue = "ab";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("arrayValue"), true);
        assert.equal(validatable.validate("arrayValue").length, 0);
        assert.equal(validatable.isValid("stringValue"), true);
        assert.equal(validatable.validate("stringValue").length, 0);
    });
});
