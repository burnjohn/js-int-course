
fetch('https://pokeapi.co/api/v2/pokemon/67')
  .then(function(myBlob) {
    return myBlob.json();
  })
  .then(function(response) {
    console.log('Resp', response.sprites.front_default);

    var body = document.querySelector('body');
    var image = document.createElement('img');
    image.src = response.sprites.front_default;

    body.appendChild(image);
  });


fetch('https://pokeapi.co/api/v2/pokemon/56')
  .then(function(myBlob) {
    return myBlob.json();
  })
  .then(function(response) {
    console.log('Resp', response.sprites.front_default);

    var body = document.querySelector('body');
    var image = document.createElement('img');
    image.src = response.sprites.front_default;

    body.appendChild(image);
  });

fetch('https://pokeapi.co/api/v2/pokemon/77')
  .then(function(myBlob) {
    return myBlob.json();
  })
  .then(function(response) {
    console.log('Resp', response.sprites.front_default);

    var body = document.querySelector('body');
    var image = document.createElement('img');
    image.src = response.sprites.front_default;

    body.appendChild(image);
  });
