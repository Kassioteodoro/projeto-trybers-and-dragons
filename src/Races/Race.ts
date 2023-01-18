export default abstract class Race {
  constructor(
    protected _name: string,
    protected _dexterity: number,
  ) {
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}