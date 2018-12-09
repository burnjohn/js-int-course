
fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=1')
  .then(function(myBlob) {
    myBlob.text();
  })
  .then(function(response) {
    console.log('Resp', response);

    var body = document.querySelector('body');
    var textContainer = document.createElement('p');
    var text = document.createTextNode(response);

    textContainer.appendChild(text);
    body.appendChild(textContainer);
  })
  .catch()
