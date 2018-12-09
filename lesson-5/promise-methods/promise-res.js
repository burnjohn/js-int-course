
const multiply = number => { return number * 2};
const addString = number => number + ' is my number';
const saveToLocalStorage = number => {
  localStorage.setItem('myNumber', number);

  return number;
};
const insertToDom = text => {
  const body = document.querySelector('body');
  const node = document.createElement('p');
  node.innerHTML = text;

  body.appendChild(node);
};

const number = 5;

Promise.resolve(number)
  .then(addString)
  .then(saveToLocalStorage)
  .then(insertToDom)
  .catch(error => {
    console.log(error)
  });

Promise.reject(error);
