import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeNullValidator } from "../../../source/validators/object/must/must-be-null.validator";
import { assert2 } from "../../assert2";
import { MustBeNullExample } from "./must-be-null.example";
import { assert } from "chai";

describe("mustBeNull", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeNullValidator(null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeNullValidator(null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be null.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeNullValidator("Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeNullExample();

        validatable.name = "test";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

    });
});
