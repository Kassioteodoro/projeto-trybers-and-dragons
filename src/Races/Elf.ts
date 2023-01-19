import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints = 99;
  protected static _int = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf._int += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._int;
  }
}