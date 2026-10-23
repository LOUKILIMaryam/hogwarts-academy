import { Repository } from "./repository";
import { Spell } from "./types";
import { ValidateSpellPower } from "./decorators";

export class SpellRepository extends Repository<Spell> {
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}


