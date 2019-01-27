import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustMatchValidator } from "../../../source/validators/string/must/must-match.validator";
import { assert } from "chai";

describe("mustMatch", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustMatchValidator(/^[0-9]+$/, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), false);
        assert.equal(validator.isValid("1"), true);
        assert.equal(validator.isValid("100"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustMatchValidator(/^[a-z]+$/, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must match /^[a-z]+$/.");
        assert.equal(validator.messageKey, "MustMatch");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustMatchValidator(/^[0-9]+$/, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
