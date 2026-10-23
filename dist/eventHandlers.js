"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSpellCast = handleSpellCast;
function handleSpellCast(event) {
    console.log(`Wizard ${event.wizardId} cast ${event.spellName}`);
}
