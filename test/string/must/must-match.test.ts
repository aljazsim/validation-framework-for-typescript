import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustMatchValidator } from "../../../source/validators/string/must/must-match.validator";
import { assert2 } from "../../assert2";
import { MustMatchExample } from "./must-match.example";
import { assert } from "chai";

describe("mustMatch", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustMatchValidator(/^[0-9]+$/, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        assert.equal(validator.isValid("a"), false);
        assert.equal(validator.isValid("A"), false);
        assert.equal(validator.isValid("1"), true);
        assert.equal(validator.isValid("100"), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new MustMatchValidator(/^[a-z]+$/, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must match /^[a-z]+$/.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustMatchValidator(/^[0-9]+$/, "Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new MustMatchExample();

        validatable.name = "AaA";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = "65788";

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
