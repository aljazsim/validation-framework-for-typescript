import { Validatable, ValidationLevel, ValidationMessage } from "../source";
import { assert } from "chai";

// tslint:disable-next-line:class-name
export class assert2
{
    public static equal(validationMessage: ValidationMessage, validatable: Validatable, propertyName: string, message: string, validationContext: string | null, validationLevel: ValidationLevel, validationPriority: number)
    {
        assert.equal(validationMessage.validationSource, validatable);
        assert.equal(validationMessage.propertyName, propertyName);
        assert.equal(validationMessage.message, message);
        assert.deepEqual(validationMessage.validationContext, validationContext);
        assert.equal(validationMessage.validationLevel, validationLevel);
        assert.equal(validationMessage.validationPriority, validationPriority);
    }
}
