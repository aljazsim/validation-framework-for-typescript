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

    constructor()
    {
        Validator.getLocalizedMessage = (messageKey) =>
        {
            if (messageKey === "mustBeEmail")
            {
                return "Must be a valid e-mail address.";
            }
            if (messageKey === "mustBePhoneNumber")
            {
                return "Must be a valid phone number.";
            }
            else
            {
                return null;
            }
        };
    }
}
