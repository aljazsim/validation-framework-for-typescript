import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeBetweenValidator } from "../../../source/validators/number/cannot/cannot-be-between.validator";
import { assert2 } from "../../assert2";
import { CannotBeBetweenToExample } from "./cannot-be-between-to.example";
import { assert } from "chai";

describe("cannotBeBetween", () =>
{
    it("should validate correctly", () =>
    {
        let validator = new CannotBeBetweenValidator(0, 3, true, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(-1), true);
        assert.equal(validator.isValid(0), false);
        assert.equal(validator.isValid(1), false);
        assert.equal(validator.isValid(2), false);
        assert.equal(validator.isValid(3), false);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        validator = new CannotBeBetweenValidator("0", "3", false, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid("0"), true);
        assert.equal(validator.isValid("1"), false);
        assert.equal(validator.isValid("2"), false);
        assert.equal(validator.isValid("3"), true);
        assert.equal(validator.isValid(false), true);

        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);

        try
        {
            validator = new CannotBeBetweenValidator(0, "3", false, null, ValidationLevel.error, ValidationContext.default, 0);

            assert.fail();
        }
        catch (ex)
        {
            assert.equal(ex.message, "Value must be of type number.");
        }

        try
        {
            validator = new CannotBeBetweenValidator("0", 3, false, null, ValidationLevel.error, ValidationContext.default, 0);

            assert.fail();
        }
        catch (ex)
        {
            assert.equal(ex.message, "Value must be of type string.");
        }
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeBetweenValidator(-1, 1, true, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be between -1 and 1 inclusive.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, true);

        validator = new CannotBeBetweenValidator(-1, 1, false, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be between -1 and 1.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
        assert.equal(validator.minValue, -1);
        assert.equal(validator.maxValue, 1);
        assert.equal(validator.inclusive, false);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeBetweenValidator(5, 6, true, "Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);

        assert.equal(validator.minValue, 5);
        assert.equal(validator.maxValue, 6);
        assert.equal(validator.inclusive, true);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeBetweenToExample();

        validatable.name = 3;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate().get(0), validatable, "name", "message 3 - 5", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = 5;

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

        validatable.name = 1;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
