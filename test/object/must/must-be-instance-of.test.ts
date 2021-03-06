import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeInstanceOfValidator } from "../../../source/validators/object/must/must-be-instance-of.validator";
import { assert2 } from "../../assert2";
import { MustBeInstanceOfExample } from "./must-be-instance-of.example";
import { assert } from "chai";

describe("mustInstanceOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeInstanceOfValidator(Error, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);
        assert.equal(validator.isValid(new Error()), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeInstanceOfValidator(Array, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be instance of Array.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeInstanceOfValidator(Date, "Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeInstanceOfExample();

        validatable.name = 1;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message Date", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message Date", null, ValidationLevel.error, 15);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = new Date();

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
