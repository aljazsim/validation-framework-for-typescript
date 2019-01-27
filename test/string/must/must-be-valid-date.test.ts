import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeValidDateValidator } from "../../../source/validators/string/must/must-be-valid-date.validator";
import { assert2 } from "../../assert2";
import { MustBeValidDateExample } from "./must-be-valid-date.example";
import { assert } from "chai";

describe("cannotBeValidDate", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeValidDateValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), false);
        assert.equal(validator.isValid("A tree and a rock"), false);
        assert.equal(validator.isValid("a tree and a rock"), false);
        assert.equal(validator.isValid("564 6 4687 5"), false);
        assert.equal(validator.isValid(" \t     "), false);
        assert.equal(validator.isValid("!"), false);
        assert.equal(validator.isValid("1.1.019"), true);
        assert.equal(validator.isValid("15.1.2019"), false);
        assert.equal(validator.isValid("1.15.2019"), true);
        assert.equal(validator.isValid("15.01.2019"), false);
        assert.equal(validator.isValid("01.15.2019"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeValidDateValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be a valid date.");
        assert.equal(validator.messageKey, "MustBeValidDate");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeValidDateValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeValidDateExample();

        validatable.name = "AaA";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate()[0], validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = "01.15.2019";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
