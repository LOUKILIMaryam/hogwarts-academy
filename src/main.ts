import { WizardRepository } from "./wizardRepository";
import { SpellRepository } from "./spellRepository";
import { handleSpellCast } from "./eventHandlers";
import { SpellCalculator } from "./spellCalculator";
import { isWizard } from "./guards";
import { NewWizard } from "./types";

// ==================== Exercice 1 ====================
const wizards = new WizardRepository();

const harry: NewWizard = {
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true,
};

const hermione: NewWizard = {
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
handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus",
});

// Test de sécurité : décommentez, TypeScript doit signaler une ERREUR
// handleSpellCast({ type: "level-up", wizardId: 1, newLevel: 6 });

// ==================== Exercice 4 ====================
const spells = new SpellRepository();

spells.add({ id: 102, name: "Protego", category: "defense", power: 50 });
console.log("Sort valide ajouté :", spells.getAll());

try {
  spells.add({ id: 103, name: "Invalid Spell", category: "attack", power: -10 });
} catch (error) {
  console.log("Sort refusé :", (error as Error).message);
}

console.log("Sorts après tests :", spells.getAll());

// ==================== Exercice 5 ====================
const calculator = new SpellCalculator();

console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(5, 2));

// ==================== Exercice 6 ====================
const validData: unknown = {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true,
};

const invalidData: unknown = {
  id: 2,
  name: "Viktor",
  house: "Durmstrang",
  level: 5,
  active: true,
};

console.log(isWizard(validData));   // true
console.log(isWizard(invalidData)); // false