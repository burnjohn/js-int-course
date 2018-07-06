
var request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/evolution-chain/?limit=10', true);

request.onreadystatechange = function() {

  if (request.readyState === 4 && request.status === 200) {
    console.log('Resp', request.responseText);

    var body = document.querySelector('body');
    var textContainer = document.createElement('p');
    var text = document.createTextNode(request.responseText);

    textContainer.appendChild(text);
    body.appendChild(textContainer);
  }

};

request.send();
