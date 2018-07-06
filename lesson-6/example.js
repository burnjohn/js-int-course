
const node = document.querySelector('body');

node.addEventListener('click', () => console.log(window));

node.removeEventListener('click', () => console.log(window));

node.click();