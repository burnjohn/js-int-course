/*
 * Lexical environment example
 *
 */


let dogCount = 2;
let catCount = 3;

(() => {
  let dogName = 'Little-Bob';
  let catName = 'Little-Bill';

  //anonymousLexEnv = {
  //  dogName: '',
  //  catName: ''
  //  this: undefined,
  //  parentLexEnv: global
  // }

  function foo() {
    let catOwner = 'Bob';
    let dogOwner = 'Bill';

    //fooLexEnv = {
    //  catOwner: '',
    //  dogOwner: '',
    //  inner: func,
    //  this: undefined,
    //  parentLexEnv: anonymousLexEnv
    // }

    let inner = () => {
      let counter = [];

      //innerLexEnv = {
      //  counter: [],
      //  this: undefined,
      //  parentLexEnv: global
      // };
    };

    inner();

  }

  foo();

})();
