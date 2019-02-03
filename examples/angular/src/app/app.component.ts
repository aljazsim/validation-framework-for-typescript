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
    public model = new AppModel();
    public submitted = false;

    public constructor()
    {
        Validator.getLocalizedMessage = (message) =>
        {
            if (message === "mustBeEmail")
            {
                return "Must be a valid e-mail address.";
            }
            if (message === "mustBePhoneNumber")
            {
                return "Must be a valid phone number.";
            }
            else
            {
                return null;
            }
        };
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
}
