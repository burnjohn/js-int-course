class Vehicle {
  start() {
    this.started = true;

    console.log(this.carName, ' was started');
  }

  stop() {
    this.started = false;

    console.log(`${ this.carName} was stopped`);
  }
}

class Car extends Vehicle {
  constructor(carName, driverName) {
    super(carName, driverName);

    this.carName = carName;
    this.driverName= driverName;

    Car.count = Car.count+1
  }

  static countCarInstances() {
    console.log(Car.count);
  }

  setSpeedLimit(speedLimit) {
    this.speedLimit = speedLimit;

    console.log(this.speedLimit, ' was set');
  }

  setDriver(driverName) {
    this.driverName = driverName;

    console.log(this.driverName, ' is in the', this.carName);
  }
}

const car1 = new Car('Honda', 'Bill');
