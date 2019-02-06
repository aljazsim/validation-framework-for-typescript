# Validation Framework for TypeScript and JavaScript

Validating object state can be difficult to do correctly, but failing to do so can cause many different types of issues: invalid data being stored in the database, users being allowed to perform actions they  weren't supposed to, applications getting into an invalid state, etc.
This is where Validation Framework comes in. It allows programmers to validate objects in a simple and extensible way.

## Validation

Object can be validated partially by validating the value of a specific property or as a whole by validating the values of all its properties.

### How to use the Validation Framework

When using the Validation Framework for object validation the programmer has two options of including the validation functionality:

* By inheriting from the Validatable class :

 ```typescript
import { Validatable } from "validation-framework";

export class Example extends Validatable
{
}
```

* Sometimes you might not have the option of inheriting from a certain class. In such a case, you can implement the IValidatable interface:

 ```typescript
import { IValidatable, ValidatableExtensions, ValidationMessageCollection } from "validation-framework";

export class Validatable implements IValidatable
{
    public getActiveValidationContexts(): string[]
    {
        return [];
    }

    public isValid(propertyName?: string): boolean
    {
        return !this.validate(propertyName).hasErrors;
    }

    public validate(propertyName?: string): ValidationMessageCollection
    {
        return ValidatableExtensions.validate(this, propertyName, this.getActiveValidationContexts());
    }
}
```

By choosing either of the two options and with the help of extension methods, you can do the following:

 ```typescript
let example = new Validatable();
let isObjectValid = example.isValid();
let objectValidationMessages = example.validate();
let isPropertyValid = example.isValid("name");
let propertyValidationMessages = example.validate("name");
```

### Validation attributes

The easiest way of validating properties is by using validation decorators:

 ```typescript
import { CannotBeLongerThan, CannotBeNullOrEmpty, MustMatch, Validatable } from "validation-framework";

export class Example extends Validatable
{
    @MustMatch(/^[\w ]+$"/)
    @CannotBeLongerThan(20)
    @CannotBeNullOrEmpty()
    public name: string;
}
```

The example above validates that value of property _name_:

* cannot be null or empty,
* cannot be longer than 20 characters and
* match the specified regular expression (only word characters and spaces).

How to perform validation:

 ```typescript
import { ValidationMessageCollection } from "validation-framework";

let example: Example;
let isValid: boolean;
let validationMessages: ValidationMessageCollection;

example = new Example();
example.name = "Test";
isValid = example.IsValid(); // isValid == true
isValid = example.IsValid("name"); // isValid == true
validationMessages = example.Validate(); // validationMessages.length == 0
validationMessages = example.Validate("name"); // validationMessages.length == 0

example.Name = null;
isValid = example.IsValid(); // isValid == false
isValid = example.IsValid("name"); // isValid == false
validationMessages = example.Validate(); // validationMessages.length == 1
validationMessages = example.Validate("name"); // validationMessages.length == 1
validationMessages.first.message; // "Value cannot be null or empty."
validationMessages.first.propertyName; // "name"

```

Validation framework contains a large number of validators to help you easily set validation conditions on properties. For example:

* CannotBeNull (demanding the value is not equal to null or undefined),
* CannotBeNullOrEmpty (demanding the value is not null or empty),
* MustBeOneOf (demanding the value belongs to the specified set of values),
* MustBeGreaterThan (demanding the value is greater than the specified limit),
* CannotBeLongerThan (demanding the value is not longer than the specified limit),
* CannotContainDuplicates (demanding the value does not contain duplicates),
* CannotContainNull (demanding the value does not contain null),
* MustMatch (demanding the value matches the specified regular expression),
* MustBeValidUri (demanding the value is a valid URI),
* MustBeUpperCase (demanding the value is an uppercase string)

and many more. See the complete list down below. They all start with either "Must" or "Cannot".

Using validation attributes is simple and requires little code to write, keeping your classes short and easy to understand. Making your own custom validation attributes is easy to do (see section on extending Validation Framework).
Not all validation attributes can be used with all property types. For example using MustMatch attribute on a number property makes no sense and will be ignored:

 ```typescript
import { MustMatch, Validatable } from "validation-framework";

export class Example extends Validatable
{
    @MustMatch(/^[\w ]+$/)
    public length: number;
}

let example: Example;

example = new Example();
example.length = 2;

example.isValid(); // true
example.isValid("length"); // true

```

All validators must check if value type is compatible with their validation procedure. If not, they should return true as a way of gracefully handling invalid value type.

### Custom validation

Using validation decorators may not be flexible enough in all scenarios. In that case you have the option of performing validation within the validate() method:

 ```typescript
 public validate(propertyName?: string): ValidationMessageCollection
    {
        // always call base class validation method first to execute decorator validation
        let validationMessages = super.validate(propertyName).toArray();

        // custom validation in code
        if (propertyName === null || // propertyName == null means all object's properties are being validated
            propertyName === "phoneNumber")
        {
            if (!this.phoneNumber.startsWith("+") &&
                !this.phoneNumber.startsWith("00"))
            {
                // append custom validation messages
                validationMessages.push(new ValidationMessage("Phone number must be in international format.", this, "phoneNumber"));
            }
        }

        return new ValidationMessageCollection(validationMessages);
    }
```

Make sure you call the super.validate(...) method at the beginning of the method; otherwise decorator validation will be skipped!

### Validation messages

The result of validation is a collection of validation messages. If the object or property is valid, the validation message collection will contain no items. However if the object or property is invalid, the validation message collection will contain items describing validation issues.

A validation message contains the following properties:

* validationSource: the reference to the object being validated,
* validationLevel: describing the severity of the validation issue (Info, Warning or Error)
* propertyName: the name of the property, belonging to validation source that the message relates to,
* message: the description of the validation issue,
* validationContext: the name of the validation context (see section on validation contexts) and
* validationPriority: the validation priority (see section on validation priorities).

The validation message collection is always ordered descending by validation priority (by default 0).

#### Filtering validation messages

If you're interested in a certain level of validation message messages you have the option of filtering them:

```typescript
validationMessages.hasErrors; // true if contains any error messages
validationMessages.hasWarnings; // true if contains any warning messages
validationMessages.hasInfos; // true if contains any info messages

validationMessages.errors; // only error messages
validationMessages.errors.first; // the first error message or null
validationMessages.warnings; // only warning messages
validationMessages.warnings.first; // the first warning message or null
validationMessages.infos; // only info messages
validationMessages.infos.first; // the first info message or null

validationMessages.filter("name"); // only validation messages for property name
validationMessages.toArray(); // converts the collection to an array
```

#### Merging validation messages

Sometimes you want to present only a single validation message by selecting the message with the highest validation level and highest validation priority. A collection of validation messages can be merged in the following way:

 ```typescript
var mergedValidationMessage = validationMessages.toString(); // validation messages separated by new line
```

### Custom validation messages

Every validation decorator has a default validation message provided by the underlying validator class, however you do have the option of assigning a custom one:

```typescript
@CannotBeNullOrWhitespace("Value is mandatory.")
public name: string;
```

### Custom validation level

Every validation decorator has a default validation level set to error provided by the underlying validator class, however you do have the option of assigning a custom one:

```typescript
@CannotBeNullOrWhitespace(null, ValidationLevel.warning)
public name: string;
```

You can choose between error, warning or info. If the validation message collection contains no errors it will be considered valid.

### Validation context

Sometimes you want the validation  attributes to be executed only  in certain cases. This is where validation context comes in. The default validation context is always used (ValidationContext.default), which has actually null as a value. But let's say, you want to use a validation only if the object has not yet been saved to the database:

 ```typescript
import { CannotBeNull, Validatable } from "validation-framework";

export class Example extends Validatable
{
    public id: number;

    @CannotBeNull() // always validated
    public created: Date | null;

    @CannotBeNull(null, null, "existing") // only when the validation context "existing" is active
    @MustBeNull(null, null, "new") // only when the validation context "new" is active
    public modified: Date | null;

    public getActiveValidationContexts(): string[]
    {
        if (this.id === -1)
        {
            return ["new"];
        }
        else
        {
            return ["existing"];
        }
    }
}
```

In this case property created must always have a value present, but property modified must have a value only when the active validation contexts contain "exiting" (property id > 0). If the active validation context contain "new", property modified is not allowed to have a value. Default validation context will always be validated, but you have the option of adding as many different active validation contexts as needed that change according to the internal state of the object by overriding the getActiveValidationContexts() method.

### Validation priority

Sometimes you have multiple validation rules that can be invalid at the same time:

```typescript
@MustMatch(/^[0-9]+$/)
@CannotBeLongerThan(10)
@CannotBeNull()
public name: string;
```

For example:

```typescript
example.name = "aaaaaaaaaaaaaaaaaaaaaaaaa";

let validationMessages = example.validate("name");
// validationMessages.length === 2
// validationMessages[0].message === "Value must match ^[0-9]+$."
// validationMessages[1].message === "Value cannot be longer than 10 items."
```

In such a case you might want only one rule to be active at a time. This is where you can use validation priority to specify the order of rules being evaluated. Highest validation priority starts with 0 (default validation priority) and decreases with incrementation.

```typescript
@MustMatch(/^[0-9]+$/, null, null, null, 2)
@CannotBeLongerThan(10, null, null, null, 1)
@CannotBeNull(null, null, null, 0)
public name: string;
```

In this case there will be only one validation message caused by the @CannotBeLongerThan decorator, since it has a higher priority than the @MustMatch decorator:

```typescript
example.name = "aaaaaaaaaaaaaaaaaaaaaaaaa";

var validationMessages = example.validate("name");
// validationMessages.length == 1
// validationMessages[0].message == "Value cannot be longer than 10 items."
```

### Localization

Every validation decorator will provide a default message or message template (in case the message will contain parameters, like "Value must be greater than 5."). You have the option of assigning a custom delegate that will be used to localize that template:

```typescript
// assign a custom validation message template localization delegate
Validator.getLocalizedValidationMessage = (validationMessageTemplate) => this.getLocalizedMessage(this.language, validationMessageTemplate);

// the localization function tha translates default
private function getLocalizedMessage(language: string, validationMessageTemplate: string)
{
    if (language == "Slovenian")
    {
        if (validationMessageTemplate == "Value cannot be null")
        {
            return "Vrednost ne more biti prazna";
        }
    }

    return null;
}
```

Make sure you do this before you start performing validations. If no localized message is returned, the default validation message provided by the validator will be used.

## Validation decorators and their default validation message templates

All validation decorators exist in their "Cannot" and "Must" form. All validation decorators have a standard list of parameters (custom validation message template, validation level, validation context, validation priority). If any of them is omitted or set to null, the default value provided by the underlying validator will be used. Some validation decorators have an extra parameter (e.g. CannotBeLongerThan requires the maximum length). See the list below.

| cannot decorators                               | cannot default validation message template                      | must decorators                               | must default validation message template                      | applies to        |
| ----------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------- | ----------------- |
| @CannotBeEqualTo(value)                         | "Value cannot be equal to {0}."                                 | @MustBeEqualTo(value)                         | "Value must be equal to {0}."                                 | objects           |
| @CannotBeInstanceOf(type)                       | "Value cannot be instance of {0}."                              | @MustBeInstanceOf(type)                       | "Value must be instance of {0}."                              | objects           |
| @CannotBeNull()                                 | "Value cannot be null."                                         | @MustBeNull()                                 | "Value must be null."                                         | objects           |
| @CannotBeOneOf([])                              | "Value cannot be one of: {0}."                                  | @MustBeOneOf([])                              | "Value must be one of: {0}."                                  | objects           |
| @CannotBeTypeOf(type)                           | "Value cannot be type of {0}."                                  | @MustBeTypeOf(type)                           | "Value must be type of {0}."                                  | objects           |
| @CannotBe((value: any) => boolean)              | "Value cannot be equal to the result of the expression."        | @MustBe((value: any) => boolean)              | "Value must be equal to the result of the expression."        | objects           |
| @CannotBeEmpty()                                | "Value cannot be empty."                                        | @MustBeEmpty(value)                           | "Value must be empty to {0}."                                 | arrays / strings  |
| @CannotBeEqualToArray([])                       | "Value cannot be equal to {0}."                                 | @MustBeEqualToArray([])                       | "Value must be equal to {0}."                                 | arrays            |
| @CannotBeLongerThanOrEqualTo(maxLength)         | "Value cannot be longer than or equal to {0} items."            | @MustBeLongerThanOrEqualTo(minLength)         | "Value must be longer than or equal to {0} items."            | arrays / strings  |
| @CannotBeLongerThan(maxLength)                  | "Value cannot be longer than {0} items."                        | @MustBeLongerThan(minLength)                  | "Value must be longer than {0} items."                        | arrays / strings  |
| @CannotBeNullOrEmpty()                          | "Value cannot be null or empty."                                | @MustBeNullOrEmpty()                          | "Value must be null or empty."                                | arrays / strings  |
| @CannotBeShorterThanOrEqualTo(minLength)        | "Value cannot be shorter than or equal to {0} items."           | @MustBeShorterThanOrEqualTo(maxLength)        | "Value must be shorter than or equal to {0} items."           | arrays / strings  |
| @CannotBeShorterThan(minLength)                 | "Value cannot be shorter than {0} items."                       | @MustBeShorterThan(maxLength)                 | "Value must be shorter than {0} items."                       | arrays / strings  |
| @CannotContainDuplicates()                      | "Value cannot contain duplicates."                              | @MustContainDuplicates()                      | "Value must contain duplicates."                              | arrays            |
| @CannotContainNull()                            | "Value cannot contain null."                                    | @MustContainNull()                            | "Value must contain null."                                    | arrays            |
| @CannotContainOnlyNull()                        | "Value cannot contain only null."                               | @MustContainOnlyNull()                        | "Value must contain only null."                               | arrays            |
| @CannotContain((value: any) => boolean)         | "Value cannot contain the specified expression."                | @MustContain((value: any) => boolean)         | "Value must contain the specified expression."                | arrays            |
| @CannotBeLowerCase()                            | "Value cannot be lower case."                                   | @MustBeLowerCase()                            | "Value must be lower case."                                   | strings           |
| @CannotBeNullOrWhitespace()                     | "Value cannot be null or whitespace."                           | @MustBeNullOrWhitespace()                     | "Value must be null or whitespace."                           | strings           |
| @CannotBeTitleCase()                            | "Value cannot be title case."                                   | @MustBeTitleCase()                            | "Value must be title case."                                   | strings           |
| @CannotBeUpperCase()                            | "Value cannot be upper case."                                   | @MustBeUpperCase()                            | "Value must be upper case."                                   | strings           |
| @CannotBeValidDate()                            | "Value cannot be a valid date."                                 | @MustBeValidDate()                            | "Value must be valid date."                                   | strings           |
| @CannotBeValidFloat()                           | "Value cannot be a valid float number."                         | @MustBeValidFloat()                           | "Value must be valid float number."                           | strings           |
| @CannotBeValidInteger()                         | "Value cannot be a valid integer number."                       | @MustBeValidInteger()                         | "Value must be valid integer number."                         | strings           |
| @CannotMatch(regex)                             | "Value cannot match {0}."                                       | @MustMatch(regex)                             | "Value must match {0}."                                       | strings           |
| @CannotBeBetween(minValue, maxValue, inclusive) | "Value cannot be between {0} and {0} [inclusive]."              | @MustBeBetween(minValue, maxValue, inclusive) | "Value cannot be between {0} and {0} [inclusive]."            | numbers / strings |
| @CannotBeFloat(maxDecimalPlaces)                | "Value cannot be a float number precise to {0} decimal places." | @MustBeFloat(maxDecimalPlaces)                | "Value must be a float number precise to {0} decimal places." | numbers           |
| @CannotBeGreaterThanOrEqualTo(maxValue)         | "Value cannot be greater than or equal to {0}."                 | @MustBeGreaterThanOrEqualTo(maxValue)         | "Value cannot be greater than or equal to {0}."               | numbers / strings |
| @CannotBeGreaterThan(maxValue)                  | "Value cannot be greater than {0}."                             | @MustBeGreaterThan(maxValue)                  | "Value cannot be greater than {0}."                           | numbers / strings |
| @CannotBeInteger()                              | "Value cannot be an integer number."                            | @MustBeInteger()                              | "Value must be an integer number."                            | numbers           |
| @CannotBeLessThanOrEqualTo(minValue)            | "Value cannot be less than or equal to {0}."                    | @MustBeLessThanOrEqualTo(minValue)            | "Value cannot be less than or equal to {0}."                  | numbers / strings |
| @CannotBeLessThan(minValue)                     | "Value cannot be less than {0}."                                | @MustBeLessThan(minValue)                     | "Value cannot be less than {0}."                              | numbers / strings |
| @CannotBeDateInTheFuture()                      | "Value cannot a date in the future."                            | @MustBeDateInTheFuture()                      | "Value must be a date in the future."                         | dates             |
| @CannotBeDateInThePast()                        | "Value cannot a date in the past."                              | @MustBeDateInThePast()                        | "Value must be a date in the past."                           | dates             |
| @CannotBeDate()                                 | "Value cannot a date without time."                             | @MustBeDate()                                 | "Value must be a date without time."                          | dates             |
| @CannotBeToday()                                | "Value cannot be today's date."                                 | @MustBeToday()                                | "Value must be today."                                        | dates             |

## Custom validators

If the validation descriptor is not on the list, it's easy to create a custom one. Make sure you extend the Validator class pass the default constructor parameters to the parent constructor and add additional ones if necessary. Then make sure you implement the isValid() method performing value validation and the getDefaultMessage() method returning the default validation message template (use {0} {1} ... in the validation message template if you want to supply it with parameters) and the getMessageParameters() method returning an array of validation message template parameters (optional). See example below.

```typescript
import { ValidationLevel, Validator } from "validation-framework";

export class MustMatchValidator extends Validator
{
    constructor(public regex: RegExp, message: string | null | undefined, validationLevel: ValidationLevel | null | undefined, validationContext: string | null | undefined, validationPriority: number | null | undefined)
    {
        super(message, validationLevel, validationContext, validationPriority);

        cannotBeNull(regex);
    }

    public isValid(value: any): boolean
    {
        if (isNull(value))
        {
            return true;
        }
        else if (typeof value === "string")
        {
            return isMatch(value, this.regex);
        }
        else
        {
            return true;
        }
    }

    protected getDefaultMessage(): string
    {
        return "Value must match {0}.";
    }

    protected getMessageParameters()
    {
        return [this.regex];
    }
}
```

Tip: make sure you check the value type in the isValid() method and return true if the value doesn't correspond to the expected type. That way validators will just be ignored if used on the wrong property type.

After implementing your validator, you need to expose its functionality as a validation decorator.

```typescript
import "reflect-metadata";
import { MustBeValidCreditCardNumberValidator } from "./must-be-valid-credit-card-number.validator";
import { getValidationDecorator, ValidationLevel } from "validation-framework";

export function MustBeValidCreditCardNumber(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustBeValidCreditCardNumberValidator(message, validationLevel, validationContext, validationPriority));
}
```

After that you can use the custom validation decorator just like any other.

```typescript
import { MustBeValidCreditCardNumber } from "./must-be-valid-credit-card-number.decorator";

...

@MustBeValidCreditCardNumber()
    public creditCardNumber = "";
```

Instructions:

* Make sure you derive from the Validator class.
* Make sure you use the AttributeUsage attribute. Just copy it from  the example.
* Implement the default message describing the validation violation.
* Implement the default message key, that can be used for message localization.
* Generally null values are validated as valid (same goes for DBNull). If you need to constrain your property to contain an actual value, add the CannotBeNull attribute.
* When expecting a value of a specific type, make sure you validate the value type.

## Examples

### Using the Validation Framework with Angular

Example of form validation using the Validation Framework in an [Angular](https://angular.io/) application with [Twitter Bootstrap](https://getbootstrap.com/):

![form validation](./Doc/form-validation.gif)

Example of form validation localization using the Validation Framework in an [Angular](https://angular.io/) application with [Twitter Bootstrap](https://getbootstrap.com/):

![form validation localization](./Doc/form-validation-localization.gif)

You can view the complete example at [./examples/angular](./examples/angular).

## Installation

Run the following console command:

```powershell
npm i validation-framework
```

Or just simply add reference in your packages.json file:

```json
"dependencies": {
    "validation-framework": "1.0.0"
}
```

and then install the package via NPM:

```powershell
npm install
```

## Usage

Simply include the ValidationFramework decorators in your script:

```typescript
import { CannotBeNull, MustMatch, Validatable } from "validation-framework";

...
export class Model extends extends Validatable
{
    @MustMatch(/^[A-Z][a-z]*$/)
    @CannotBeNullOrWhitespace()
    public name= "";
}
```

or

```typescript
import * as vf from "validation-framework";

...

export class Model extends extends vf.Validatable
{
    @vs.MustMatch(/^[A-Z][a-z]*$/)
    @vs.CannotBeNullOrWhitespace()
    public name= "";
}
```

## Guidelines

* The Validation Framework can be used in different environments, like console applications, web applications, packages, etc. You can use it to validate user input, request payloads, configuration, ... It comes with a basic list of validation decorators and makes it easy extend validation functionality.
* Implement custom validation decorators whenever you can. They will make your code short, clean and reusable.
* When you need to perform validation whose result depends on value of more than one property, do so by overriding the Validate() method. That cannot be done with validation decorators.

## Change log

### [1.0.0] - 2019-02-07

* Initial release.