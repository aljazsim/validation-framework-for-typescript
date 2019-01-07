import { isNullOrWhiteSpace } from "defensive-programming-framework";

export function toTitleCase(value: string)
{
    if (isNullOrWhiteSpace(value))
    {
        return value;
    }
    else
    {
        return value.replace(/\w\S*/g, x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase());
    }
}
