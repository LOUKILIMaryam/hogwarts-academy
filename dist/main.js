"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wizardRepository_1 = require("./wizardRepository");
const spellRepository_1 = require("./spellRepository");
const eventHandlers_1 = require("./eventHandlers");
const spellCalculator_1 = require("./spellCalculator");
const guards_1 = require("./guards");
// ==================== Exercice 1 ====================
const wizards = new wizardRepository_1.WizardRepository();
const harry = {
    name: "Harry Potter",
    house: "Gryffindor",
    level: 5,
    active: true,
};
const hermione = {
    name: "Hermione Granger",
    house: "Gryffindor",
    level: 6,
    active: true,
};
const createdHarry = wizards.register(harry);
const createdHermione = wizards.register(hermione);
console.log("Sorcier créé :", createdHarry);
console.log("Sorcier créé :", createdHermione);
console.log("Tous les sorciers :", wizards.getAll());
// Test de sécurité : décommentez, TypeScript doit signaler une ERREUR
// wizards.register({ id: 99, name: "X", house: "Gryffindor", level: 1, active: true });
// ==================== Exercice 2 ====================
wizards.register({ name: "Draco Malfoy", house: "Slytherin", level: 5, active: true });
wizards.register({ name: "Luna Lovegood", house: "Ravenclaw", level: 4, active: true });
console.log("Gryffindor :", wizards.findByHouse("Gryffindor"));
console.log("Slytherin :", wizards.findByHouse("Slytherin"));
console.log("Hufflepuff :", wizards.findByHouse("Hufflepuff"));
// Test de sécurité : décommentez, TypeScript doit signaler une ERREUR
// wizards.findByHouse("Durmstrang");
// ==================== Exercice 3 ====================
(0, eventHandlers_1.handleSpellCast)({
    type: "spell-cast",
    wizardId: 1,
    spellName: "Expelliarmus",
});
// Test de sécurité : décommentez, TypeScript doit signaler une ERREUR
// handleSpellCast({ type: "level-up", wizardId: 1, newLevel: 6 });
// ==================== Exercice 4 ====================
const spells = new spellRepository_1.SpellRepository();
spells.add({ id: 102, name: "Protego", category: "defense", power: 50 });
console.log("Sort valide ajouté :", spells.getAll());
try {
    spells.add({ id: 103, name: "Invalid Spell", category: "attack", power: -10 });
}
catch (error) {
    console.log("Sort refusé :", error.message);
}
console.log("Sorts après tests :", spells.getAll());
// ==================== Exercice 5 ====================
const calculator = new spellCalculator_1.SpellCalculator();
console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(5, 2));
// ==================== Exercice 6 ====================
const validData = {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    level: 5,
    active: true,
};
const invalidData = {
    id: 2,
    name: "Viktor",
    house: "Durmstrang",
    level: 5,
    active: true,
};
console.log((0, guards_1.isWizard)(validData)); // true
console.log((0, guards_1.isWizard)(invalidData)); // false
