import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeValidUrlValidator } from "../../../source/validators/string/must/must-be-valid-url.validator";
import { assert } from "chai";

describe("cannotBeValidDate", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeValidUrlValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), false);
        assert.equal(validator.isValid("1"), false);
        assert.equal(validator.isValid("100"), false);
        assert.equal(validator.isValid("-100"), false);
        assert.equal(validator.isValid("1,1"), false);
        assert.equal(validator.isValid("1.1"), false);
        assert.equal(validator.isValid(".01"), false);
        assert.equal(validator.isValid("3.41"), false);
        assert.equal(validator.isValid("http://www.google.com"), true);
        assert.equal(validator.isValid("https://facebook.com"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeValidUrlValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be a valid URL.");
        assert.equal(validator.messageKey, "MustBeValidUrl");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeValidUrlValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
