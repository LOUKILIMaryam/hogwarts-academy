"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHouse = isHouse;
exports.isWizard = isWizard;
const validHouses = [
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff",
];
function isHouse(value) {
    return (typeof value === "string" &&
        validHouses.some((house) => house === value));
}
function isWizard(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidate = value;
    return (typeof candidate.id === "number" &&
        typeof candidate.name === "string" &&
        isHouse(candidate.house) &&
        typeof candidate.level === "number" &&
        typeof candidate.active === "boolean");
}
