import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeEmptyValidator } from "../../../source/validators/collection/cannot/cannot-be-empty.validator";
import { assert2 } from "../../assert2";
import { CannotBeEmptyExample } from "./cannot-be-empty.example";
import { assert } from "chai";

describe("CannotBeEmpty", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeEmptyValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), false);
        assert.equal(validator.isValid([]), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeEmptyValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be empty.");
        assert.equal(validator.messageKey, "CannotBeEmpty");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeEmptyValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeEmptyExample();

        validatable.arrayValue = [];
        validatable.stringValue = "";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 2);
        assert2.equal(validatable.validate()[0], validatable, "arrayValue", "message", null, ValidationLevel.error, 15);
        assert2.equal(validatable.validate()[1], validatable, "stringValue", "message", null, ValidationLevel.error, 15);

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

        validatable.arrayValue = [1];
        validatable.stringValue = "a";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("arrayValue"), true);
        assert.equal(validatable.validate("arrayValue").length, 0);
        assert.equal(validatable.isValid("stringValue"), true);
        assert.equal(validatable.validate("stringValue").length, 0);
    });
});
