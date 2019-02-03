import { Component } from "@angular/core";
import { AppModel } from "src/app/app.model";
import { Validator } from "validation-framework";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent
{
    // #region Properties (3)

    public language = "English";
    public model = new AppModel();
    public submitted = false;

    // #endregion

    // #region Constructors (1)

    public constructor()
    {
        // assign a custom message localization delegate (if no localized message is found, the default provided by the Validator will be used)
        Validator.getLocalizedValidationMessage = (validationMessageTemplate) => this.localizeValidationMessageToSlovenian(this.language, validationMessageTemplate);
    }

    // #endregion

    // #region Public Methods (2)

    public setLanguage(language: string)
    {
        this.language = language;

        // force ui refresh
        let tmp = this.model;

        this.model = null;
        this.model = tmp;
    }

    public async submit()
    {
        if (this.model.isValid())
        {
            // disable submit button
            this.submitted = true;

            // simulate post delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // reset form
            this.submitted = false;
            this.model = new AppModel();
        }
        else
        {
            this.submitted = true;
        }
    }

    // #endregion

    // #region Private Methods (1)

    private localizeValidationMessageToSlovenian(language: string, validationMessageTemplate: string)
    {
        // this simulates getting localized validation message templates from a "localization" service
        let translations = {
            "English":
            {
                "mustBeEmail": "Value must be a valid e-mail address."
            },
            "Slovenian":
            {
                "Invalid first name": "Neveljavno ime.",
                "Invalid last name": "Neveljaven priimek.",
                "Required value.": "Vrednost je obvezna.",
                "mustBeEmail": "Vrednost mora biti veljaven e-mail naslov.",
                "Value must be longer than or equal to {0} items.": "Niz ima lahko največ {0} znakov.",
                "Value must be shorter than or equal to {0} items.": "Niz mora imeti najmanj {0} znakov.",
                "Value must be a valid date.": "Vrednost mora biti veljaven datum.",
                "You must agree to terms and conditions.": "Strinjati se morate s pogoji poslovanja",
                "Phone number must be in international format.": "Telefonska številka mora biti v mednarodnem formatu"
            }
        };

        return translations[language][validationMessageTemplate];
    }

    // #endregion
}
