import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeUpperCaseValidator } from "../../../source/validators/string/must/must-be-upper-case.validator";
import { assert } from "chai";

describe("cannotBeUpperCase", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeUpperCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), true);
        assert.equal(validator.isValid("A tree and a rock"), false);
        assert.equal(validator.isValid("A TREE AND A ROCK"), true);
        assert.equal(validator.isValid("564 6 4687 5"), true);
        assert.equal(validator.isValid(" \t     "), true);
        assert.equal(validator.isValid("!"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeUpperCaseValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be upper case.");
        assert.equal(validator.messageKey, "MustBeUpperCase");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeUpperCaseValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
