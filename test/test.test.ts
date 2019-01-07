import "mocha";
import { ValidatableTest } from "./validatable-test";

describe("test", () =>
{
    describe("validate()", () =>
    {
        const a = new ValidatableTest();

        const valid = a.isValid();
        const validate = a.validate();
    });
});
