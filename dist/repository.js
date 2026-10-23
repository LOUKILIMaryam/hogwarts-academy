"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
// accepte un type à condition qu'il contienne un id
class Repository {
    constructor() {
        // accessibles depuis les classes héritées aussi
        this.items = [];
        this.nextId = 1;
    }
    // ajouter, sans valeur de retour
    add(item) {
        this.items.push(item);
    }
    // récupérer tous les éléments
    getAll() {
        return this.items;
    }
    // trouver par id
    findById(id) {
        return this.items.find((i) => i.id === id);
    }
}
exports.Repository = Repository;
