export type EnergyType = ('mana' | 'stamina');

export default interface Energy {
  type_: EnergyType,
  amount: number,
}

// export class EnergyType implements Energy {
//   public type: ('mana' | 'stamina');
//   constructor() {
//     this.type = 'stamina';
//   }
// }