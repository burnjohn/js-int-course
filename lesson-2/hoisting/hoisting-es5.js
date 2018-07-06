/*
 * The example of how hoisting works in ES5
 *
 */
'use strict';
var a = 6;


(function() {


  console.log('variable a: ', a); // undefined
  console.log('variable b: ', b); // undefined
  console.log('variable c: ', someFunc);

  var b = function() {
    // some code
  };
  var a = 2;
  var c = '';



  if (true) {
    window.h = 5;
  }

  // console.log('variable h: ', h);




  console.log(a);



  var n = 4;

  function someFunc() {
    var n = 5;

    console.log(n);
  }

  someFunc();

  console.log(n);




  abc();

  // console.log('variable d: ', d);

  function abc() {
    d = 5;
  }

})();


console.log(a); //6