"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
const wizards = new repository_1.WizardRepository();
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
