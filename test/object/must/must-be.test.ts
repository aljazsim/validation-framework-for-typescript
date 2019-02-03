import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeValidator } from "../../../source/validators/object/must/must-be.validator";
import { assert2 } from "../../assert2";
import { MustBeExample } from "./must-be.example";
import { assert } from "chai";

describe("mustBe", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeValidator(x => x > 3, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), false);
        assert.equal(validator.isValid(undefined), false);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);

        assert.equal(validator.isValid(5), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeValidator(x => typeof x === "string", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be equal to the result of the expression.");
        assert.equal(validator.messageKey, "MustBe");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeValidator(x => x !== null && x.toUpper() === x, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeExample();

        validatable.name = 1;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        validatable.name = 10;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
