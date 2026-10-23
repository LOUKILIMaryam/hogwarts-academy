// accepte un type à condition qu'il contienne un id
export class Repository<T extends { id: number }> {
  // accessibles depuis les classes héritées aussi
  protected items: T[] = [];
  protected nextId = 1;

  // ajouter, sans valeur de retour
  add(item: T): void {
    this.items.push(item);
  }

  // récupérer tous les éléments
  getAll(): T[] {
    return this.items;
  }

  // trouver par id
  findById(id: number): T | undefined {
    return this.items.find((i) => i.id === id);
  }
}