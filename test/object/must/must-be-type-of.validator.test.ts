import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeTypeOfValidator } from "../../../source/validators/object/must/must-be-type-of.validator";
import { assert } from "chai";

describe("mustInstanceOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeTypeOfValidator("string", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), false);
        assert.equal(validator.isValid(new Error()), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeTypeOfValidator("number", null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be type of number.");
        assert.equal(validator.messageKey, "MustBeTypeOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeTypeOfValidator("date", "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
