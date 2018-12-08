const weaknessTypeKey = Symbol('privateWeaknessKey');
const healthTypeKey = Symbol('privateHealthKey');

class BulbasaurPokemon {
  constructor(name){
    this.name = name;

    this[healthTypeKey] =  50;
    this[weaknessTypeKey] = 'fire';
  }

  isDefeated(health) {
    return health < 0;
  }

  defend(attack){
    const { damage, pokemonType } = attack;
    const health = this[healthTypeKey];


    if (pokemonType === this[weaknessTypeKey]) {
      this[healthTypeKey] = health -  damage * 1.5;
      console.log('Can\'t defend :( Current health:' + this[healthTypeKey]);

      if (this.isDefeated(this[healthTypeKey])) console.log(`Pokemon ${ this.name } was defeated!`);
      return;
    }

    this[healthTypeKey] = health -  damage / 1.5;
    console.log('Handle attack! Current health: ' + this[healthTypeKey]);
    if (this.isDefeated(this[healthTypeKey])) console.log(`Pokemon ${ this.name } was defeated!`);
  }
}

const bulbasaur = new BulbasaurPokemon('Brave');

bulbasaur.defend({ damage: 25,  pokemonType: 'fire'});
bulbasaur.defend({ damage: 15,  pokemonType: 'water'});
bulbasaur.defend({ damage: 15,  pokemonType: 'water'});

console.log('Pokemon: ', bulbasaur);
console.log('Pokemon values: ', Object.values(bulbasaur));