/*
 * ES6 closure example
 *
 */

const obj = (() => {
  let inreaseCount = null;
  let getCount = null;


  {
    let counter = 0;

    inreaseCount = () => {
      counter += 1;
    };

    getCount = () => {
      return counter;
    };
  }

  return {
    inreaseCount,
    getCount,
    getCountInner() {
      return counter;
    }
  };
})();