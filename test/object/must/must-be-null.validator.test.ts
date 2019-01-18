import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeNullValidator } from "../../../source/validators/object/must/must-be-null.validator";
import { assert } from "chai";

describe("mustBeNull", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be null.");
        assert.equal(validator.messageKey, "MustBeNull");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeNullValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
