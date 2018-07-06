/*
 * This is the example of es6 static method and property.
 * Also you can see the example of implementing logic
 */

class Car {
  constructor(model) {
    this.model = model;

    this.state = {
      doorIsOpen: false,
      engineIsOn: false,
      driver: null
    };
    
    Car.count++;
  }

  // static method
  static getCreatedCarsCount() {
    return Car.count;
  }

  drive() {
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
  }

  enterTheCar(driverName) {
    if (this.state.driver) {
      console.log('Somebody is in the car, cant seat');
      return;
    }

    console.log(driverName + ' is in the car');
    this.state.driver = driverName;
  }

  closeTheDoor() {
    this.state.doorIsOpen = false;
  }

  escapeTheCar() {
    if (!this.state.driver) {
      console.log('Nobody in the car');
      return;
    }

    this.state.driver = null;
    this.state.doorIsOpen = true;
  }

  startEngine() {
    if (this.state.engineIsOn) {
      console.log('Engine has been already started');
      return;
    }

    console.log('Engine was started');
    this.state.engineIsOn = true;
  }

  stopEngine() {
    if (this.state.engineIsOn) {
      console.log('Engine has been already stopped');
      return;
    }

    this.state.engineIsOn = false;
  }
}

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
