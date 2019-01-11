import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeNullValidator } from "../../../source/validators/object/cannot/cannot-be-null.validator";
import { assert } from "chai";

describe("cannotBeNull", () =>
{
    describe("validation", () =>
    {
        const validator = new CannotBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        it("should return false", () => assert.equal(validator.isValid(null), false));
        it("should return false", () => assert.equal(validator.isValid(undefined), false));

        it("should return true", () => assert.equal(validator.isValid(1), true));
        it("should return true", () => assert.equal(validator.isValid("a"), true));
        it("should return true", () => assert.equal(validator.isValid({ a: "b" }), true));
    });

    describe("default state", () =>
    {
        const validator = new CannotBeNullValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        it("should have correct state", () => assert.equal(validator.message, "Value cannot be null."));
        it("should have correct state", () => assert.equal(validator.getDefaultMessage(), validator.message));
        it("should have correct state", () => assert.equal(validator.messageKey, "CannotBeNull"));
        it("should have correct state", () => assert.equal(validator.getDefaultMessageKey(), validator.messageKey));
        it("should have correct state", () => assert.deepEqual(validator.messageParameters, []));
        it("should have correct state", () => assert.equal(validator.validationLevel, ValidationLevel.error));
        it("should have correct state", () => assert.equal(validator.validationContext, ValidationContext.default));
        it("should have correct state", () => assert.equal(validator.validationPriority, 0));
    });

    describe("custom state", () =>
    {
        const validator = new CannotBeNullValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        it("should have correct state", () => assert.equal(validator.message, "Test message."));
        it("should have correct state", () => assert.equal(validator.getDefaultMessage(), "Value cannot be null."));
        it("should have correct state", () => assert.equal(validator.messageKey, "Test message key"));
        it("should have correct state", () => assert.equal(validator.getDefaultMessageKey(), "CannotBeNull"));
        it("should have correct state", () => assert.deepEqual(validator.messageParameters, []));
        it("should have correct state", () => assert.equal(validator.validationLevel, ValidationLevel.info));
        it("should have correct state", () => assert.equal(validator.validationContext, "test context"));
        it("should have correct state", () => assert.equal(validator.validationPriority, 75));
    });
});
