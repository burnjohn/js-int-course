
/*
 * Decorator example
 */

const sendToServer = (data) => {
  console.log('Send data to server: ', data)
};

const createCheckDataFunc = (onSuccess, onError) => {
  return (data) => {

    if (data.user === 'Bob') {
      return onSuccess(data);
    }

    onError && onError();
  }
};

const checkAndSave = createCheckDataFunc(
  sendToServer,
  () => console.log('Not permitted')
);

checkAndSave({ user: 'Bob' });
checkAndSave({ user: 'Bill' });