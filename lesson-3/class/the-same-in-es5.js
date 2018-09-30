/*
 * This is the example of es5 class and inheritance
 */

function Car(model) {
  this.model = model;

  this.state = {
    doorIsOpen: false,
    engineIsOn: false,
    driver: null
  };


  Car.count++;
}

// static method
Car.getCreatedCarsCount = function() {
    return Car.count;
};

Car.prototype.drive = function() {
  if (!this.state.driver) {
    console.log('There is no driver, cant go');
    return;
  }

  if (!this.state.engineIsOn) {
    console.log('Engine turned off, cant go');
    return;
  }

  if (this.state.doorIsOpen) {
    console.log('Door is open, cant go');
    return;
  }

  console.log('Wroom - Wroom');
};

Car.prototype.enterTheCar = function(driverName) {
  if (this.state.driver) {
    console.log('Somebody is in the car, cant seat');
    return;
  }

  console.log(driverName + ' is in the car');
  this.state.driver = driverName;
};

Car.prototype.closeTheDoor = function() {
  this.state.doorIsOpen = false;
};

Car.prototype.escapeTheCar = function() {
  if (!this.state.driver) {
    console.log('Nobody in the car');
    return;
  }

  this.state.driver = null;
  this.state.doorIsOpen = true;
};

Car.prototype.startEngine = function() {
  if (this.state.engineIsOn) {
    console.log('Engine has been already started');
    return;
  }

  console.log('Engine was started');
  this.state.engineIsOn = true;
};

Car.prototype.stopEngine = function() {
  if (this.state.engineIsOn) {
    console.log('Engine has been already stopped');
    return;
  }

  this.state.engineIsOn = false;
};


// static property
Car.count = 0;

var mazda = new Car('mazda');
var volksvagen = new Car('volksvagen');

console.log('Cars count: ', Car.getCreatedCarsCount());

mazda.escapeTheCar();
mazda.drive();

mazda.enterTheCar('Ivan');
mazda.drive();

mazda.startEngine();
mazda.drive();
