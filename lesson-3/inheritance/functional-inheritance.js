const eatFood = function (name) {
  console.log(name + ' is eating food');
};

const drinkBeer = function(name) {
  console.log(name + ' is drinking beer');
};

function ObjectFabric(name, age) {
  this.age = age;
  this.name = name;
  this.eatFood = eatFood.bind(this, this.name);
  this.drinkBeer = drinkBeer.bind(this, this.name);
}

const newObj = new ObjectFabric('John', 40);