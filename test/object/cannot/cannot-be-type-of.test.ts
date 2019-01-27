import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeTypeOfValidator } from "../../../source/validators/object/cannot/cannot-be-type-of.validator";
import { assert2 } from "../../assert2";
import { CannotBeTypeOfExample } from "./cannot-be-type-of.example";
import { assert } from "chai";

describe("cannotInstanceOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeTypeOfValidator("string", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), true);
        assert.equal(validator.isValid(new Error()), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeTypeOfValidator("number", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be type of number.");
        assert.equal(validator.messageKey, "CannotBeTypeOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeTypeOfValidator("date", "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeTypeOfExample();

        validatable.name = "a";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate()[0], validatable, "name", "message string", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name")[0], validatable, "name", "message string", null, ValidationLevel.error, 15);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = 1;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
