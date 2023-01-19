import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints = 74;
  protected static _int = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc._int += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._int;
  }
}