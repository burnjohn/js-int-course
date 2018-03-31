
const multiply = number => { return number * 2};
const addString = number => number + ' is my number';
const saveInLocalStorage = number => {
  localStorage.setItem('myNumber', number);
  // throw new Error('Error text');
  return number;
};
const insertToDom = text => {
  const body = document.querySelector('body');
  const node = document.createElement('p');
  node.innerHTML = text;

  body.appendChild(node);
};

const number = 5;

new Promise((res, rej) => {

  if (error) {
    rej(error)
  }

});

Promise.reject(error);

Promise.resolve(number)
  .then(addString)
  .then(saveInLocalStorage)
  .then(insertToDom)
  .catch(error => {
      console.log(error)
  });


var a = null;
getString.then(resp => {
  a = resp;
});