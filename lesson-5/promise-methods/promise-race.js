const insertToDom = pokemon => {
  const body = document.querySelector('body');
  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;

  body.appendChild(image);
};

const req1 = fetch('https://pokeapi.co/api/v2/pokemon/1').then(resp => resp.json());
const req2 = fetch('https://pokeapi.co/api/v2/pokemon/10').then(resp => resp.json());
const req3 = fetch('https://pokeapi.co/api/v2/pokemon/25').then(resp => resp.json());

Promise.race([req1, req2, req3])
  .then(pokemon => {
    insertToDom(pokemon);
  });