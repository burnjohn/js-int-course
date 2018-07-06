
var carData = {
  model: 'tesla',
  miles: null,
  TOdate: null,
};

const addMilesAsync = (car)  => {
  // var miles = getMilesAsync()
  car.miles = 2000;
  return car;
};

Promise.resolve(carData)
  .then(addMilesAsync)
  .then(addTestDate)
  .then(saveToLocalStorage)
  .catch(error => {
    console.log(error)
  }
);

function addTestDate(car) {
  if (car.miles) {
    // var date = getDateAsync()
    car.TOdate = Date.now();
  }
  return car
}

function saveToLocalStorage(car) {
  localStorage.setItem('car1', JSON.stringify(car));
}




//
// const addMiles = (car) => {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       reject('error');
//     }
//
//     // request
//     car.miles = 2000;
//     resolve(car);
//   });
// };
//
// function handleError() {
//   // code
// }
//
// addMiles(carData)
//   .then(addTestDate)
//   .then(saveToLocalStorage)
//   .catch(handleError);
//
//
// function addTestDate(car) {
//   if (car.miles) {
//     car.TOdate = Date.now();
//   }
//
//   return car;
// }
//
// function saveToLocalStorage(car) {
//   localStorage.setItem('car1', JSON.stringify(car));
// }
//
//
// // addMiles(carData, addTestDate.bind(this, carData, saveToLocalStorage));
//
