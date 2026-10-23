"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellRepository = exports.WizardRepository = exports.Repository = void 0;
//acceptun type a condition que il contient id
class Repository {
    constructor() {
        //accesible sepuis les classe heritees aussi
        this.items = [];
        this.nextId = 1;
    }
    //ajouuter,sans type de retour
    add(item) {
        this.items.push(item);
    }
    //recuper tous
    getAll() {
        return this.items;
    }
    //triyver par id
    findById(id) {
        return this.items.find((i) => i.id === id);
    }
}
exports.Repository = Repository;
class WizardRepository extends Repository {
    // Exercice 1 : enregistre un sorcier SANS identifiant et lui en attribue un
    register(newWizard) {
        const wizard = { ...newWizard, id: this.nextId++ };
        this.add(wizard);
        return wizard;
    }
}
exports.WizardRepository = WizardRepository;
class SpellRepository extends Repository {
}
exports.SpellRepository = SpellRepository;
//pour le principe de don't repeat yourself=>DRY
