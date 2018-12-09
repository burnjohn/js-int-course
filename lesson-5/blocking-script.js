const sendRequest = () => {
  const request = new XMLHttpRequest();
  const isRequestAsync = true;

  request.open('GET', 'https://pokeapi.co/api/v2/evolution-chain/?limit=10', isRequestAsync);

  request.onreadystatechange = function() {

    if (request.readyState === 4 && request.status === 200) {
      console.log('Payload got!!!');

      const body = document.querySelector('body');
      const textContainer = document.createElement('p');
      const text = document.createTextNode(request.responseText);

      textContainer.appendChild(text);
      body.appendChild(textContainer);
    }

  };

  request.send();
};

const showbutton = document.querySelector('.show-log');
const sendbutton = document.querySelector('.send-req');

showbutton.addEventListener('click', () => console.log('WORKS!!!!'));

sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
sendbutton.addEventListener('click', () => sendRequest());
