const VehicleMethods = {
  start: function() {
    this.started = true;

    console.log(this.carName, ' was started');
  },

  stop: function() {
    this.started = false;

    console.log(this.carName, ' was stopped');
  },
};


const CarMethods = {
  setSpeedLimit: function(speedLimit) {
    this.speedLimit = speedLimit;

    console.log(this.speedLimit, ' was set');
  },

  setDriver: function(driverName) {
    this.driverName = driverName;

    console.log(this.driverName, ' is in the', this.carName);
  },
};

Object.setPrototypeOf(CarMethods, VehicleMethods);

// CarMethods.prototype = VehicleMethods;

// CarMethods.__proto__ = VehicleMethods;

const car1 = {
  carName: 'honda'
};

Object.setPrototypeOf(car1, CarMethods);

const car2 = {
  carName: 'bmw'
};

Object.setPrototypeOf(car2, CarMethods);
