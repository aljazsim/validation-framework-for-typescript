import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotContainValidator } from "../../../source/validators/collection/cannot/cannot-contain.validator";
import { assert } from "chai";

describe("CannotContain", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotContainValidator(x => x > 3, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid([1]), true);
        assert.equal(validator.isValid([1, 2]), true);
        assert.equal(validator.isValid([1, 2, 3]), true);
        assert.equal(validator.isValid([1, 2, 4]), false);
        assert.equal(validator.isValid(4), true);
        assert.equal(validator.isValid("4"), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotContainValidator(x => x !== null, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot contain the specified expression.");
        assert.equal(validator.messageKey, "CannotContain");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotContainValidator(x => [1, 2, 3].indexOf(x) > -1, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });
});
