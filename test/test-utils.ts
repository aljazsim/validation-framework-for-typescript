import { IValidatable, ValidationLevel, ValidationMessage } from "../source";
import { assert } from "chai";

export function equal(validationMessage: ValidationMessage, propertyName: string, message: string, validationContext: string | null, validationLevel: ValidationLevel, validationPriority: number, validationSource: IValidatable)
{
    assert.equal(validationMessage.propertyName, propertyName);

    assert.equal(validationMessage.message, message);

    assert.equal(validationMessage.validationContext, validationContext);
    assert.equal(validationMessage.validationLevel, validationLevel);
    assert.equal(validationMessage.validationPriority, validationPriority);
    assert.equal(validationMessage.validationSource, validationSource);
}
