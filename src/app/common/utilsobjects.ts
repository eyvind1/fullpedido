export function isNonEmptyArrayof(value:any, tipo:string) {
    return Array.isArray(value) && value.length && value.every(item => typeof item === tipo);
}