export default function Capitalize(value: string) {
    return value.charAt(0).toLocaleUpperCase('TR') + value.slice(1);
}