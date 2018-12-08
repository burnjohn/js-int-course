
/*
 * Closure
 *
 */


const makeCounter = (function() {

  const config = null;

  const sendRequest = (url) => {
    if(!checkArg(url)) {
      console.log('Missing params')
      return;
    }

    //fetch()

  };

  const setParams = (params) => {
    config = params;
  };

  const checkArg = () => {};


  return {
    sendRequest,
    setParams
  }

})();


const counterInstance = makeCounter();

// каждый вызов увеличивает счётчик и возвращает результат
counterInstance(); // 1
counterInstance(); // 2
counterInstance(); // 3
