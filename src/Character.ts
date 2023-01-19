import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Figther from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Figther {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;  
    
  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get strength(): number {
    return this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const lostLife = attackPoints - this._defense;
    if (lostLife >= 0) this._lifePoints -= lostLife; 
    if (lostLife <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Figther): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10); 
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    // console.log(this._strength);
    if (this.maxLifePoints >= this._race.maxLifePoints) {
      this.maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
  }
}