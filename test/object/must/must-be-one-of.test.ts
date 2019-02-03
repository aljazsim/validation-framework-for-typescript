import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeOneOfValidator } from "../../../source/validators/object/must/must-be-one-of.validator";
import { assert2 } from "../../assert2";
import { MustBeOneOfExample } from "./must-be-one-of.example.test";
import { assert } from "chai";

describe("mustBeOneOf", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeOneOfValidator([1, 2, "3"], null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), false);
        assert.equal(validator.isValid(undefined), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid({ a: "b" }), false);

        assert.equal(validator.isValid("3"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeOneOfValidator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be one of: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...].");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeOneOfValidator(["aaa"], "Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeOneOfExample();

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        validatable.name = "d";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);
        assert2.equal(validatable.validate("name").get(0), validatable, "name", "message [a, b, c]", null, ValidationLevel.error, 15);

        validatable.name = "a";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
