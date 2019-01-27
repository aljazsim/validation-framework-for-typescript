import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeOneOfValidator } from "../../../source/validators/object/cannot/cannot-be-one-of.validator";
import { assert2 } from "../../assert2";
import { CannotBeOneOfExample } from "./cannot-be-one-of.example.test";
import { assert } from "chai";

describe("cannotBeOneOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeOneOfValidator([1, 2, "3"], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("3"), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeOneOfValidator([21], null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be one of: [21].");
        assert.equal(validator.messageKey, "CannotBeOneOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeOneOfValidator(["aaa"], "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeOneOfExample();

        validatable.name = "a";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate()[0], validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name")[0], validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = "d";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
