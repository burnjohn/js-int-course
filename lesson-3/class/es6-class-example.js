/*
 * This is the example of es6 class and inheritance
 *
 */

class SuperPerson {
  constructor(name, gender) {

  }
  eatFood() {
    console.log(this.name + ' is eating food');
  }

  drinkBeer() {
    console.log(this.name + ' is drinking beer');
  }
}

class Man extends SuperPerson {
  constructor(name, gender) {
    super(name, gender);

    this.name = name;
    this.gender = gender;
    this.family = true;
  }

  getFamilyStatus() {
    if (!this.family) {
      return 'Free';
    }

    return 'married';
  }
}

var ivan = new Man('Ivan', 'male');
var oleg = new Man('Oleg', 'male');

console.log('New created person: ', ivan);
console.log('Using method from prototype: ', ivan.getFamilyStatus());

ivan.eatFood();
ivan.drinkBeer();

oleg.eatFood();
oleg.drinkBeer();
