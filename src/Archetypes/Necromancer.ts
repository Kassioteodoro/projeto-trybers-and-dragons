import { EnergyType } from '../Energy';
import ArchetType from './Archestype';

export default class Necromancer extends ArchetType {
  protected static _int = 0;
  protected _energyType: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._int += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._int;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
} 