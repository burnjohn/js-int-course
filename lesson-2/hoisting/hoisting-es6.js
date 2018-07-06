
// What are constants in ES5

var MAX_TIMES_RETRY = 5;
var TEMPLATE_NAME = 'Saxton';
var API_ENDPOINT = 'https://gist.github.com/';


/*
 * This is the example of how hoisting works in ES6
 *
 */


'use strict'; //- works by default in ES6 modules

if (true) {
  const h = 5;
}

console.log('variable h: ', h);

console.log('variable a: ', a);

console.log('variable b: ', b);

console.log('variable c: ', c);

let a = 2;

const b = function() {
  // some code
};

function c() {
  // some code
}

abc();

console.log('variable d: ', d);

let globalResp = null;

function sendRequest() {
  request.then(response => {
    globalResp = response
  })
}


{
  let i = 5;
  console.log('Inside for loop: ', i);

}

console.log('After for loop: ', i);
