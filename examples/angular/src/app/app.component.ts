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
            if (messageKey === "invalidEmailAddress")
            {
                return "invalid email address";
            }
            else
            {
                return null;
            }
        };
    }
}
