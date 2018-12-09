
fetch('https://pokeapi.co/api/v2/pokemon/1')
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


fetch('https://pokeapi.co/api/v2/pokemon/10')
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

fetch('https://pokeapi.co/api/v2/pokemon/25')
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
