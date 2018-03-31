/*
 * Here you can find examples of lexical environment and closures
 *
 */


/*
 * Lexical environment
 *
 */

{

  function sayHi(name) {
    const phrase = "Привет, " + name;
    // LexicalEnvironment = { name: 'Вася', phrase: 'Привет Вася' };
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
  function makeCounter() {
    var currentCount = 1;

    return function() {
      return currentCount++;
    };
  }

  var counter = makeCounter();

  // каждый вызов увеличивает счётчик и возвращает результат
  counter(); // 1
  counter(); // 2
  counter(); // 3

}