const obj = (() => {
  let inreaseCount = null;
  let getCount = null;

  // LexEnvPar = {inreaseCount, getCount, parentLexEnv: window}
  {
    // LexEnvPar = {counter, parentLexEnv: LexEnvPar}

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