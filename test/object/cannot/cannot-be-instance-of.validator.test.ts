import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeInstanceOfValidator } from "../../../source/validators/object/cannot/cannot-be-instance-of.validator";
import { assert } from "chai";

describe("cannotInstanceOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeInstanceOfValidator(Error, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);
        assert.equal(validator.isValid(new Error()), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeInstanceOfValidator(Array, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be instance of Array.");
        assert.equal(validator.messageKey, "CannotBeInstanceOf");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeInstanceOfValidator(Date, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
