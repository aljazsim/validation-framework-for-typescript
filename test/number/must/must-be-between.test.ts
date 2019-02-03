import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { MustBeBetweenValidator } from "../../../source/validators/number/must/must-be-between.validator";
import { assert2 } from "../../assert2";
import { MustBeBetweenToExample } from "./must-be-between-to.example";
import { assert } from "chai";

describe("MustBeBetween", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new MustBeBetweenValidator(0, 3, true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), false);
        assert.equal(validator.isValid(0), true);
        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid(2), true);
        assert.equal(validator.isValid(3), true);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new MustBeBetweenValidator("0", "3", false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), false);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid("0"), false);
        assert.equal(validator.isValid("1"), true);
        assert.equal(validator.isValid("2"), true);
        assert.equal(validator.isValid("3"), false);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        try
        {
            validator = new MustBeBetweenValidator(0, "3", false, null, null, ValidationLevel.error, ValidationContext.default, 0);

            assert.fail();
        }
        catch (ex)
        {
            assert.equal(ex.message, "Value must be of type number.");
        }

        try
        {
            validator = new MustBeBetweenValidator("0", 3, false, null, null, ValidationLevel.error, ValidationContext.default, 0);

            assert.fail();
        }
        catch (ex)
        {
            assert.equal(ex.message, "Value must be of type string.");
        }
    });

    it("should have correct default state", () =>
    {
        let validator = new MustBeBetweenValidator(-1, 1, true, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be between -1 and 1 inclusive.");
        assert.equal(validator.messageKey, "MustBeBetween");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, true);

        validator = new MustBeBetweenValidator(-1, 1, false, null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value must be between -1 and 1.");
        assert.equal(validator.messageKey, "MustBeBetween");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, false);
    });

    it("should have correct custom state", () =>
    {
        let validator = new MustBeBetweenValidator(5, 6, true, "Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);

        assert.equal(validator.minValue, 5);
        assert.equal(validator.maxValue, 6);
        assert.equal(validator.inclusive, true);
    });

    it("should validate", () =>
    {
        let validatable = new MustBeBetweenToExample();

        validatable.name = 6;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 3 - 5", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = 2.9;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 3 - 5", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = 3;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
