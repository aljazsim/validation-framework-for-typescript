import "mocha";
import { ValidationLevel, ValidationMessage, ValidationMessageCollection } from "../source";
import { CannotBeNullExample } from "./object/cannot/cannot-be-null.example";
import { assert } from "chai";

describe("ValidationMessageCollection", () =>
{
    it("should validate correctly", () =>
    {
        let validationMessagesArray: ValidationMessage[];
        let validationMessagesArray2: ValidationMessage[] | undefined;
        let validationMessage: ValidationMessage | undefined;
        let validationMessages: ValidationMessageCollection;

        validationMessages = new ValidationMessageCollection([]);

        assert.equal(validationMessages.length, 0);

        validationMessagesArray = [];
        validationMessagesArray.push(new ValidationMessage("message1", new CannotBeNullExample(), "property1", ValidationLevel.error, "context1", 1));
        validationMessagesArray.push(new ValidationMessage("message2", new CannotBeNullExample(), "property2", ValidationLevel.warning, "context2", 2));
        validationMessagesArray.push(new ValidationMessage("message3", new CannotBeNullExample(), "property3", ValidationLevel.info, "context3", 3));

        validationMessages = new ValidationMessageCollection(validationMessagesArray);

        assert.equal(validationMessages.length, 3);
        assert.equal(validationMessages.get(0), validationMessagesArray[0]);
        assert.equal(validationMessages.get(1), validationMessagesArray[1]);
        assert.equal(validationMessages.get(2), validationMessagesArray[2]);

        validationMessagesArray = [];
        validationMessagesArray.push(new ValidationMessage("message1", new CannotBeNullExample(), "property1", ValidationLevel.info, "context1", 0));
        validationMessagesArray.push(new ValidationMessage("message2", new CannotBeNullExample(), "property2", ValidationLevel.warning, "context2", 0));
        validationMessagesArray.push(new ValidationMessage("message3", new CannotBeNullExample(), "property3", ValidationLevel.error, "context3", 0));

        validationMessages = new ValidationMessageCollection(validationMessagesArray);

        assert.equal(validationMessages.length, 3);
        assert.equal(validationMessages.get(0), validationMessagesArray[2]);
        assert.equal(validationMessages.get(1), validationMessagesArray[1]);
        assert.equal(validationMessages.get(2), validationMessagesArray[0]);

        validationMessagesArray = [];
        validationMessagesArray.push(new ValidationMessage("message1", new CannotBeNullExample(), "property1", ValidationLevel.info, "context1", 1));
        validationMessagesArray.push(new ValidationMessage("message2", new CannotBeNullExample(), "property2", ValidationLevel.info, "context2", 0));
        validationMessagesArray.push(new ValidationMessage("message3", new CannotBeNullExample(), "property3", ValidationLevel.warning, "context3", 1));
        validationMessagesArray.push(new ValidationMessage("message4", new CannotBeNullExample(), "property4", ValidationLevel.warning, "context4", 0));
        validationMessagesArray.push(new ValidationMessage("message5", new CannotBeNullExample(), "property5", ValidationLevel.error, "context5", 1));
        validationMessagesArray.push(new ValidationMessage("message6", new CannotBeNullExample(), "property6", ValidationLevel.error, "context6", 0));

        validationMessages = new ValidationMessageCollection(validationMessagesArray);

        assert.equal(validationMessages.length, 6);
        assert.equal(validationMessages.get(0), validationMessagesArray[5]);
        assert.equal(validationMessages.get(1), validationMessagesArray[3]);
        assert.equal(validationMessages.get(2), validationMessagesArray[1]);
        assert.equal(validationMessages.get(3), validationMessagesArray[4]);
        assert.equal(validationMessages.get(4), validationMessagesArray[2]);
        assert.equal(validationMessages.get(5), validationMessagesArray[0]);
        assert.equal(validationMessages.toArray()[0], validationMessagesArray[5]);
        assert.equal(validationMessages.toArray()[1], validationMessagesArray[3]);
        assert.equal(validationMessages.toArray()[2], validationMessagesArray[1]);
        assert.equal(validationMessages.toArray()[3], validationMessagesArray[4]);
        assert.equal(validationMessages.toArray()[4], validationMessagesArray[2]);
        assert.equal(validationMessages.toArray()[5], validationMessagesArray[0]);
        assert.equal(validationMessages.toString(), validationMessages.toArray().map(x => x.message).join("\n"));
        assert.equal(validationMessages.filter("property2").length, 1);
        assert.equal(validationMessages.filter("property2").first, validationMessagesArray[1]);
        assert.equal(validationMessages.filter("propertyX").first, null);

        assert.equal(validationMessages.hasErrors, true);
        assert.equal(validationMessages.errors.length, 2);
        assert.equal(validationMessages.errors.get(0), validationMessagesArray[5]);
        assert.equal(validationMessages.errors.get(1), validationMessagesArray[4]);
        assert.equal(validationMessages.errors.hasErrors, true);
        assert.equal(validationMessages.errors.hasWarnings, false);
        assert.equal(validationMessages.errors.hasInfos, false);
        assert.equal(validationMessages.warnings.length, 2);
        assert.equal(validationMessages.warnings.get(0), validationMessagesArray[3]);
        assert.equal(validationMessages.warnings.get(1), validationMessagesArray[2]);
        assert.equal(validationMessages.warnings.hasErrors, false);
        assert.equal(validationMessages.warnings.hasWarnings, true);
        assert.equal(validationMessages.warnings.hasInfos, false);
        assert.equal(validationMessages.infos.length, 2);
        assert.equal(validationMessages.infos.get(0), validationMessagesArray[1]);
        assert.equal(validationMessages.infos.get(1), validationMessagesArray[0]);
        assert.equal(validationMessages.infos.hasErrors, false);
        assert.equal(validationMessages.infos.hasWarnings, false);
        assert.equal(validationMessages.infos.hasInfos, true);

        validationMessages = new ValidationMessageCollection(<ValidationMessage[]>validationMessagesArray2);

        assert.equal(validationMessages.get(-1), null);
        assert.equal(validationMessages.get(0), null);
        assert.equal(validationMessages.get(-1), null);
        assert.equal(validationMessages.hasErrors, false);
        assert.equal(validationMessages.errors.length, 0);
        assert.equal(validationMessages.errors.hasErrors, false);
        assert.equal(validationMessages.errors.hasWarnings, false);
        assert.equal(validationMessages.errors.hasInfos, false);
        assert.equal(validationMessages.warnings.length, 0);
        assert.equal(validationMessages.warnings.hasErrors, false);
        assert.equal(validationMessages.warnings.hasWarnings, false);
        assert.equal(validationMessages.warnings.hasInfos, false);
        assert.equal(validationMessages.infos.length, 0);
        assert.equal(validationMessages.infos.hasErrors, false);
        assert.equal(validationMessages.infos.hasWarnings, false);
        assert.equal(validationMessages.infos.hasInfos, false);

        validationMessagesArray2 = [];
        validationMessagesArray2.push(<ValidationMessage>validationMessage);

        validationMessages = new ValidationMessageCollection(<ValidationMessage[]>validationMessagesArray2);

        assert.equal(validationMessages.get(-1), null);
        assert.equal(validationMessages.get(0), null);
        assert.equal(validationMessages.get(-1), null);
        assert.equal(validationMessages.hasErrors, false);
        assert.equal(validationMessages.errors.length, 0);
        assert.equal(validationMessages.errors.hasErrors, false);
        assert.equal(validationMessages.errors.hasWarnings, false);
        assert.equal(validationMessages.errors.hasInfos, false);
        assert.equal(validationMessages.warnings.length, 0);
        assert.equal(validationMessages.warnings.hasErrors, false);
        assert.equal(validationMessages.warnings.hasWarnings, false);
        assert.equal(validationMessages.warnings.hasInfos, false);
        assert.equal(validationMessages.infos.length, 0);
        assert.equal(validationMessages.infos.hasErrors, false);
        assert.equal(validationMessages.infos.hasWarnings, false);
        assert.equal(validationMessages.infos.hasInfos, false);

        validationMessagesArray = [];
        validationMessagesArray.push(new ValidationMessage("message1", new CannotBeNullExample(), "property1", ValidationLevel.error, "context1", 1));
        validationMessagesArray.push(new ValidationMessage("message2", new CannotBeNullExample(), "property2", ValidationLevel.info, "context2", 2));
        validationMessagesArray.push(new ValidationMessage("message3", new CannotBeNullExample(), "property3", ValidationLevel.warning, "context3", 3));
        validationMessagesArray.push(new ValidationMessage("message1", validationMessagesArray[0].validationSource, "property1", ValidationLevel.error, "context1", 1));
        validationMessagesArray.push(new ValidationMessage("message2", validationMessagesArray[1].validationSource, "property2", ValidationLevel.info, "context2", 2));
        validationMessagesArray.push(new ValidationMessage("message3", validationMessagesArray[2].validationSource, "property3", ValidationLevel.warning, "context3", 3));

        validationMessages = new ValidationMessageCollection(validationMessagesArray);

        assert.equal(validationMessages.length, 3);
        assert.equal(validationMessages.get(0), validationMessagesArray[0]);
        assert.equal(validationMessages.get(1), validationMessagesArray[1]);
        assert.equal(validationMessages.get(2), validationMessagesArray[2]);
    });
});
