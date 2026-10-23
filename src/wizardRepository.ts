import { Repository } from "./repository";
import { Wizard, NewWizard } from "./types";

export class WizardRepository extends Repository<Wizard> {
  // enregistre un sorcier SANS identifiant et lui en attribue un
  register(newWizard: NewWizard): Wizard {
    const wizard: Wizard = { ...newWizard, id: this.nextId++ };
    this.add(wizard);
    return wizard;
  }

  // filtrer par maison
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter((wizard) => wizard.house === house);
  }
}