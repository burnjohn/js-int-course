
/*
 * Functions
 *
 */


function getSum(numA, numB) {
  return numA + numB;
}

const getSquare = function(number) {
  return number * number;
};

const getMultipliedValue = (param1, param2) => param1 * param2;

// IIFE example

(function() {
  let x = 9;
  x++;
  console.log(x);
})();


/*
 * Example with arrow function
 */

function Person(){
  this.age = 0;

  setInterval(function() {
    this.age++;
  }, 1000);
}

let obj = new Person();


function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

let obj = new Person();


/*
 * Generator function example
 */

function* makeGenerator() {
  console.log('Function scope is active!', getFunc);

  yield 'First action';

  console.log('Start moving after 1st action');

  yield 'Second action';

  console.log('Start moving after 2st action');

  function getFunc(){}

}

const gen = makeGenerator();

gen.next();



/*
 * Advanced generator function example
 */

function makeGenerator() {

}

const gen = makeGenerator();

gen.next('BOB');
gen.next('ALEX');
gen.next('BILL');