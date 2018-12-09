

const createAsyncTimeout = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve('data'), 2000);
    } catch (error) {
      reject(error);
    }
  });


const result = createAsyncTimeout()
  .then(
    (data) => console.log('Promise success: ', data),
    (error) => console.log('Promise error: ', error),
  );

const scrollTo = (coords, position) => {
  if (!coords || !position) {
    return Promise.reject('No coords or position');
  }

  if (position === 'onpage') {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const time = 3000;
    const onEnd = resolve;

    scrollLib.scrollTo(coords, time, onEnd);
  });

};

scrollTo(1000, 'afterpage')
  .then(highlightEl)
  .then(clearHighlighting)
  .catch(showError);