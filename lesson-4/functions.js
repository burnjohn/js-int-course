
/*
 * Functions
 *
 */


declaration();

function declaration(numA, numB) {
  return numA + numB;
}

var getSquare = function(number) {
  return number * number;
};

const getMultipliedValue = (param1, param2) => param1 * param2;

// IIFE example

(function() {
  const x = 9;

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

const obj = new Person();


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
 * Scopes example
 *
 */


const b = 'Bob';

function getB() {
  console.log(b);
}

function common() {
  const b = 10;
  getB();
}

common();