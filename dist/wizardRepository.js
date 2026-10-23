"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardRepository = void 0;
const repository_1 = require("./repository");
class WizardRepository extends repository_1.Repository {
    // enregistre un sorcier SANS identifiant et lui en attribue un
    register(newWizard) {
        const wizard = { ...newWizard, id: this.nextId++ };
        this.add(wizard);
        return wizard;
    }
    // filtrer par maison
    findByHouse(house) {
        return this.getAll().filter((wizard) => wizard.house === house);
    }
}
exports.WizardRepository = WizardRepository;
