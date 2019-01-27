import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeTitleCaseValidator } from "../../../source/validators/string/cannot/cannot-be-title-case.validator";
import { assert } from "chai";

describe("cannotBeTitleCase", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeTitleCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid("    \t "), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid("A"), false);
        assert.equal(validator.isValid("A tree and a rock"), true);
        assert.equal(validator.isValid("A Tree And A Rock"), false);
        assert.equal(validator.isValid("5"), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeTitleCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be title case.");
        assert.equal(validator.messageKey, "CannotBeTitleCase");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeTitleCaseValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
