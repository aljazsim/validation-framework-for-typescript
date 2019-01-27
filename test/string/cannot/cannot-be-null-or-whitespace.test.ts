import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeNullOrWhitespaceValidator } from "../../../source/validators/string/cannot/cannot-be-null-or-whitespace.validator";
import { assert } from "chai";

describe("cannotBeNullOrWhitespace", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeNullOrWhitespaceValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(""), false);
        assert.equal(validator.isValid("    \t "), false);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid("A"), true);
        assert.equal(validator.isValid("5"), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeNullOrWhitespaceValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be null or white space.");
        assert.equal(validator.messageKey, "CannotBeNullOrWhitespace");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeNullOrWhitespaceValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});