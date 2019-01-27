import { isNullOrWhiteSpace } from "defensive-programming-framework";

/**
 * Converts the specified value to title case.
 *
 * @export
 * @param {string} value - The value.
 * @returns - The value in title case.
 */
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
