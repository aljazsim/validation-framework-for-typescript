# Validation Framework for TypeScript and JavaScript

Validating object state can be difficult to do correctly, but failing to do so can cause many different types of issues: invalid data being stored in the database, users being allowed to perform actions they  weren't supposed to, applications getting into an invalid state, etc.
This is where Validation Framework comes in. It allows programmers to validate objects in a simple and extensible way.

## Validation

Object can be validated partially by validating the value of a specific property or as a whole by validating the values of all its properties.

### How to use the Validation Framework

When using the Validation Framework for object validation the programmer has two options of including the validation functionality:

By inheriting from the Validatable class:

 ```typescript
import { Validatable } from "validation-framework-ts";

export class Example extends Validatable
{
}
```

Sometimes you might not have the option of inheriting from a certain class. In such a case, you can implement the IValidatable interface:

 ```typescript
import { IValidatable, ValidatableExtensions, ValidationMessageCollection } from "validation-framework-ts";

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

### Validation decorators

The easiest way of validating properties is by using validation decorators:

 ```typescript
import { CannotBeLongerThan, CannotBeNullOrEmpty, MustMatch, Validatable } from "validation-framework-ts";

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
import { ValidationMessageCollection } from "validation-framework-ts";

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
* MustBeUpperCase (demanding the value is an uppercase string)

and many more. See the complete list down below. They all start with either "Must" or "Cannot".

Using validation decorators is simple and requires little code to write, keeping your classes short and easy to understand. Making your own custom validation decorators is easy to do (see section on extending Validation Framework).
Not all validation decorators can be used with all property types. For example using MustMatch validation decorator on a number property makes no sense and will be ignored:

 ```typescript
import { MustMatch, Validatable } from "validation-framework-ts";

export class Example extends Validatable
{
    @MustMatch(/^[\w]+$/)
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

The result of validation is a collection of validation messages. If the object or property is valid, the validation message collection will contain no validation error message items. However if the object or property is invalid, the validation message collection will contain items describing validation issues.

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

A collection of validation messages can be merged in the following way:

 ```typescript
var mergedValidationMessage = validationMessages.toString(); // all validation messages separated by new line
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

Sometimes you want the validation decorators to be executed only  in certain cases. This is where the validation context comes in. The default validation context is always used (ValidationContext.default), which has actually null as a value. But let's say, you want to use a validation only if the object has not yet been saved to the database:

 ```typescript
import { CannotBeNull, Validatable } from "validation-framework-ts";

export class Example extends Validatable
{
    public id: number = -1;

    @CannotBeNull() // always validated
    public created: Date | null;

    @CannotBeNull(null, null, "existing") // only when the validation context "existing" is active
    @MustBeNull(null, null, "new") // only when the validation context "new" is active
    public modified: Date | null;

    public getActiveValidationContexts(): string[]
    {
        return this.id === -1 ? ["new"] : ["existing"];
    }
}
```

In this case property created must always have a value present, but property modified must have a value only when the active validation contexts contain "exiting" (property id > -1). If the active validation context contain "new", property modified is not allowed to have a value. Default validation context will always be validated, but you have the option of adding as many different active validation contexts as needed that change according to the internal state of the object by overriding the getActiveValidationContexts() method.

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

In this case there will be only one item in the validation message collection contributed by the @CannotBeLongerThan decorator, since it has a higher priority than the @MustMatch decorator:

```typescript
example.name = "aaaaaaaaaaaaaaaaaaaaaaaaa";

var validationMessages = example.validate("name");
// validationMessages.length == 1
// validationMessages[0].message == "Value cannot be longer than 10 items."
```

### Localization

Every validation decorator will provide a default validation message or validation message template (in case the message will contain parameters, like "Value must be greater than 5."). You have the option of assigning a custom delegate that will be used to localize that template:

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

All validation decorators exist in their *Cannot* and *Must* form. All validation decorators have a standard list of parameters (custom validation message template, validation level, validation context, validation priority). If any of them is omitted or set to null or undefined, the default value provided by the underlying validator will be used. Some validation decorators have an extra parameter (e.g. CannotBeLongerThan requires the maximum length). The list below only contains the *Cannot* decorators, but every *Cannot* decorator has a matching *Must* decorator.

| decorators                                      | applies to        | default validation message template                             |
| ----------------------------------------------- | ----------------- | --------------------------------------------------------------- |
| @CannotBeEqualTo(value)                         | objects           | "Value cannot be equal to {0}."                                 |
| @CannotBeInstanceOf(type)                       | objects           | "Value cannot be instance of {0}."                              |
| @CannotBeNull()                                 | objects           | "Value cannot be null."                                         |
| @CannotBeOneOf([])                              | objects           | "Value cannot be one of: {0}."                                  |
| @CannotBeTypeOf(type)                           | objects           | "Value cannot be type of {0}."                                  |
| @CannotBe((value: any) => boolean)              | objects           | "Value cannot be equal to the result of the expression."        |
| @CannotBeEmpty()                                | arrays / strings  | "Value cannot be empty."                                        |
| @CannotBeEqualToArray([])                       | arrays            | "Value cannot be equal to {0}."                                 |
| @CannotBeLongerThanOrEqualTo(maxLength)         | arrays / strings  | "Value cannot be longer than or equal to {0} items."            |
| @CannotBeLongerThan(maxLength)                  | arrays / strings  | "Value cannot be longer than {0} items."                        |
| @CannotBeNullOrEmpty()                          | arrays / strings  | "Value cannot be null or empty."                                |
| @CannotBeShorterThanOrEqualTo(minLength)        | arrays / strings  | "Value cannot be shorter than or equal to {0} items."           |
| @CannotBeShorterThan(minLength)                 | arrays / strings  | "Value cannot be shorter than {0} items."                       |
| @CannotContainDuplicates()                      | arrays            | "Value cannot contain duplicates."                              |
| @CannotContainNull()                            | arrays            | "Value cannot contain null."                                    |
| @CannotContainOnlyNull()                        | arrays            | "Value cannot contain only null."                               |
| @CannotContain((value: any) => boolean)         | arrays            | "Value cannot contain the specified expression."                |
| @CannotBeLowerCase()                            | strings           | "Value cannot be lower case."                                   |
| @CannotBeNullOrWhitespace()                     | strings           | "Value cannot be null or whitespace."                           |
| @CannotBeTitleCase()                            | strings           | "Value cannot be title case."                                   |
| @CannotBeUpperCase()                            | strings           | "Value cannot be upper case."                                   |
| @CannotBeValidDate()                            | strings           | "Value cannot be a valid date."                                 |
| @CannotBeValidFloat()                           | strings           | "Value cannot be a valid float number."                         |
| @CannotBeValidInteger()                         | strings           | "Value cannot be a valid integer number."                       |
| @CannotMatch(regex)                             | strings           | "Value cannot match {0}."                                       |
| @CannotBeBetween(minValue, maxValue, inclusive) | numbers / strings | "Value cannot be between {0} and {0} [inclusive]."              |
| @CannotBeFloat(maxDecimalPlaces)                | numbers           | "Value cannot be a float number precise to {0} decimal places." |
| @CannotBeGreaterThanOrEqualTo(maxValue)         | numbers / strings | "Value cannot be greater than or equal to {0}."                 |
| @CannotBeGreaterThan(maxValue)                  | numbers / strings | "Value cannot be greater than {0}."                             |
| @CannotBeInteger()                              | numbers           | "Value cannot be an integer number."                            |
| @CannotBeLessThanOrEqualTo(minValue)            | numbers / strings | "Value cannot be less than or equal to {0}."                    |
| @CannotBeLessThan(minValue)                     | numbers / strings | "Value cannot be less than {0}."                                |
| @CannotBeDateInTheFuture()                      | dates             | "Value cannot a date in the future."                            |
| @CannotBeDateInThePast()                        | dates             | "Value cannot a date in the past."                              |
| @CannotBeDate()                                 | dates             | "Value cannot a date without time."                             |
| @CannotBeToday()                                | dates             | "Value cannot be today's date."                                 |

## Custom validators

If the validation descriptor is not on the list, it's easy to create a custom one. Make sure you extend the Validator class, pass the default constructor parameters to the parent constructor and add additional ones if necessary.

Make sure you implement:

* the isValid() method performing value validation,
* the getDefaultMessage() method returning the default validation message template (use {0} {1} ... in the validation message template if you want to supply it with parameters) and
* the getMessageParameters() method returning an array of validation message template parameters (optional).

Example:

```typescript
import { ValidationLevel, Validator } from "validation-framework-ts";

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
import { MustMatchValidator } from "./must-match.validator";
import { getValidationDecorator, ValidationLevel } from "validation-framework-ts";

export function MustBeValidCreditCardNumber(message?: string, validationLevel?: ValidationLevel, validationContext?: string | null, validationPriority?: number)
{
    return getValidationDecorator(new MustMatchValidator(message, validationLevel, validationContext, validationPriority));
}
```

After that you can use the custom validation decorator just like any other.

```typescript
import { MustMatch } from "./must-match.decorator";

export class Model extends Validatable
{
  @MustMatch(/^[0-9]{12}$/)
  public creditCardNumber = "";
}
```

Instructions:

* Make sure you derive from the Validator class.
* Implement the default validation message template describing the validation violation.
* Generally null and undefined values are validated as valid. If you need to constrain your property to contain an actual value, add the CannotBeNull validation decorator.
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
npm i validation-framework-ts
```

Or just simply add reference in your packages.json file:

```json
"dependencies": {
    "validation-framework-ts": "1.0.0"
}
```

and then install the package via NPM:

```powershell
npm install
```

## Usage

Simply include the ValidationFramework decorators in your script:

```typescript
import { CannotBeNull, MustMatch, Validatable } from "validation-framework-ts";

...
export class Model extends extends Validatable
{
    @MustMatch(/^[A-Z][a-z]*$/)
    @CannotBeNullOrWhitespace()
    public name= "";
}
```

Or use a namespace:

```typescript
import * as vf from "validation-framework-ts";

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