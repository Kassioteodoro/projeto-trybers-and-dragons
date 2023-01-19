import { EnergyType } from '../Energy';
import ArchetType from './Archestype';

export default class Ranger extends ArchetType {
  protected static _int = 0;
  protected _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Ranger._int += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._int;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
} 