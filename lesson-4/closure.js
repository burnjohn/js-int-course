/*
 * Here you can find examples of lexical environment and closures
 *
 */

let a = true;

(() => {
// LexEnv = {top: true, func: func(){}, parentEnv: window}
  let top = true;

  const func = () => {
    // LexEnv = {inner: true, parentEnv: LexEnv};
    const inner = true;
    top = false;
    a = false;

  };

  func();

})();


/*
 * Lexical environment
 *
 */

{

  function sayHi(name) {
    const phrase = "Привет, " + name;
    // LexicalEnvironment = {
      // name: 'Вася',
      // phrase: 'Привет Вася'
    // };
    alert(phrase);
  }

  sayHi('Вася');

}

{
  var phrase = 'Привет';

  function sayHi(name) {
    alert(phrase + ', ' + name);
  }

  sayHi('Вася');  // Привет, Вася (*)

  phrase = 'Пока';

  sayHi('Вася'); // Пока, Вася (**)

}


/*
 * Closure
 *
 */

{
var counter = (function() {

  var config = null;

  var sendRequest = (url) => {
    if(!checkArg(url)) {
      console.log('Missing params')
      return;
    }

    //fetch()

  };

  var setParams = (params) => {
    config = params;
  };

  var checkArg = () => {};

  // lex env
  // {
  //    config: {},
  //
  // }

  return {
    sendRequest,
    setParams
  }

})();

  counter.setParams();
  counter.sendRequest();

  var counter = {
    config: null,
    setParams(params) {
      config = params;
    },
    sendRequest(){

    }
  };

  counter.setParams();

  var counter = makeCounter();

  // каждый вызов увеличивает счётчик и возвращает результат
  counter(); // 1
  counter(); // 2
  counter(); // 3

}