import "mocha";
import { ValidationContext, ValidationLevel } from "../../../source";
import { CannotBeDateInTheFutureValidator } from "../../../source/validators/date/cannot/cannot-be-date-in-the-future.validator";
import { assert2 } from "../../assert2";
import { CannotBeDateInTheFutureExample } from "./cannot-be-date-in-the-future.example";
import { assert } from "chai";

describe("CannotBeDateInTheFuture", () =>
{
    let validator: CannotBeDateInTheFutureValidator;
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    it("should validate correctly", () =>
    {
        validator = new CannotBeDateInTheFutureValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.isValid(null), true);
        assert.equal(validator.isValid(undefined), true);
        assert.equal(validator.isValid(""), true);
        assert.equal(validator.isValid([]), true);

        assert.equal(validator.isValid(new Date()), true);
        assert.equal(validator.isValid(today), true);
        assert.equal(validator.isValid(yesterday), true);
        assert.equal(validator.isValid(tomorrow), false);

        assert.equal(validator.isValid(1), true);
        assert.equal(validator.isValid("a"), true);
        assert.equal(validator.isValid(["a"]), true);
        assert.equal(validator.isValid({ a: "b" }), true);
    });

    it("should have correct default state", () =>
    {
        validator = new CannotBeDateInTheFutureValidator(null, null, ValidationLevel.error, ValidationContext.default, 0);

        assert.equal(validator.message, "Value cannot be a date in the future.");
        assert.equal(validator.messageKey, "CannotBeDateInTheFuture");
        assert.equal(validator.validationLevel, ValidationLevel.error);
        assert.equal(validator.validationContext, ValidationContext.default);
        assert.equal(validator.validationPriority, 0);
    });

    it("should have correct custom state", () =>
    {
        validator = new CannotBeDateInTheFutureValidator("Test message.", "Test message key", ValidationLevel.info, "test context", 75);

        assert.equal(validator.message, "Test message.");
        assert.equal(validator.messageKey, "Test message key");
        assert.equal(validator.validationLevel, ValidationLevel.info);
        assert.equal(validator.validationContext, "test context");
        assert.equal(validator.validationPriority, 75);
    });

    it("should validate", () =>
    {
        let validatable = new CannotBeDateInTheFutureExample();

        validatable.name = tomorrow;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);

        assert.equal(validatable.isValid(), false);
        assert.equal(validatable.validate().length, 1);
        assert2.equal(validatable.validate()[0], validatable, "name", "message", null, ValidationLevel.error, 15);

        assert.equal(validatable.isValid("name"), false);
        assert.equal(validatable.validate("name").length, 1);

        validatable.name = null;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);

        validatable.name = today;

        assert.deepEqual(validatable.getActiveValidationContexts(), []);
        assert.equal(validatable.isValid(), true);
        assert.equal(validatable.validate().length, 0);
        assert.equal(validatable.isValid("name"), true);
        assert.equal(validatable.validate("name").length, 0);
    });
});
