import { EnergyType } from '../Energy';
import ArchetType from './Archestype';

export default class Warrior extends ArchetType {
  protected static _int = 0;
  protected _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Warrior._int += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._int;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
} 