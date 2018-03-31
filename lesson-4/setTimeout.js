

/*
 * setTimeout example
 *
 */


// for (var i = 1; i < 10; i++) {
//   setTimeout(function(){ console.log(i); }, 0);
// }



//index.js
setTimeout(function() {
  console.log("TIMEOUT 1");
}, 0);

setTimeout(function() {
  console.log("TIMEOUT 2");

}, 0);
setTimeout(function() {
  console.log("TIMEOUT 3");
}, 0);


setImmediate(function() {
  console.log("SETIMMEDIATE 1");
});
setImmediate(function() {
  console.log("SETIMMEDIATE 2");
});

// Promise.resolve(console.log('RESOLVE'));