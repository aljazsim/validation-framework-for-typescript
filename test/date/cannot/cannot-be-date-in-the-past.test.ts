import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeDateInThePastValidator } from "../../../source/validators/date/cannot/cannot-be-date-in-the-past.validator";
import { assert2 } from "../../assert2";
import { CannotBeDateInThePastExample } from "./cannot-be-date-in-the-past.example";
import { assert } from "chai";

describe("CannotBeDateInThePast", () =>
{
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    it("should validate correctly", () =>
    {
        let validator = new CannotBeDateInThePastValidator(null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(new Date()), true);
        assert.equal(validator.isValid(today), false);
        assert.equal(validator.isValid(yesterday), false);
        assert.equal(validator.isValid(tomorrow), true);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        let validator = new CannotBeDateInThePastValidator(null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be a date in the past.");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        let validator = new CannotBeDateInThePastValidator("Test message.", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeDateInThePastExample();

        validatable.name = yesterday;

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

        validatable.name = tomorrow;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
