import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeEqualToValidator } from "../../../source/validators/object/cannot/cannot-be-equal-to.validator";
import { assert2 } from "../../assert2";
import { CannotBeEqualToExample } from "./cannot-be-equal-to.example";
import { assert } from "chai";

describe("cannotBeEqualTo", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeEqualToValidator("5", null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("5"), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeEqualToValidator(21, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be equal to 21.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeEqualToValidator("aaa", "Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeEqualToExample();

        validatable.name = 11;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 11", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = 1;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
