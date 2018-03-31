const insertToDom = pokemon => {
  const body = document.querySelector('body');
  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;

  body.appendChild(image);
};

const req1 = fetch('https://pokeapi.co/api/v2/pokemon/67').then(resp => resp.json());
const req2 = fetch('https://pokeapi.co/api/v2/pokemon/56').then(resp => resp.json());
const req3 = fetch('https://pokeapi.co/api/v2/pokemon/77').then(resp => resp.json());


Promise.all([req1, req2, req3])
  // .then(respList => Promise.all(respList.map(resp => resp.json())))
  .then(pokemonList => {
    console.log(pokemonList);
    pokemonList.forEach(insertToDom)
  })
  .catch(
    error => {

    }
  );

const data = sendReq();

let data = null;
sendReq().then(resp => { data = resp });