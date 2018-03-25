/*
 * The example of how hoisting works in ES5
 *
 */

console.log('variable a: ', a);
console.log('variable b: ', b);
console.log('variable c: ', c);



if (true) {
  var h = 5;
}

console.log('variable h: ', h);


var a = 2;

var b = function() {
  // some code
};

function c() {
  // some code
}

abc();

console.log('variable d: ', d);

function abc() {
  d = 5;
}


for (var i = 1; i < 10; i++) {
  console.log('Inside for loop: ', i);
}

console.log('After for loop: ', i);


