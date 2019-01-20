import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeTitleCaseValidator } from "../../../source/validators/string/must/must-be-title-case.validator";
import { assert } from "chai";

describe("cannotBeTitleCase", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeTitleCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid("    \t "), true);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), true);
        assert.equal(validator.isValid("A tree and a rock"), false);
        assert.equal(validator.isValid("A Tree And A Rock"), true);
        assert.equal(validator.isValid("5"), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeTitleCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be title case.");
        assert.equal(validator.messageKey, "MustBeTitleCase");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeTitleCaseValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
