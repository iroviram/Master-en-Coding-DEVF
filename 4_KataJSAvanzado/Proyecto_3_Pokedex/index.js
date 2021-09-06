//* URI - https://pokeapi.co/api/v2/pokemon/

const URI = 'https://pokeapi.co/api/v2/pokemon/';

function consultarPokemon(id) {
    fetch(URI+id).then(function(response){
        if(response.ok) {
            response.json().then(function (pokemon) {
                pokemonImage(pokemon);
            });
        }
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

function pokemonImage(pokemon){
    let pokemonOrderNum = pokemon.order;
    /* let pokemonSpriteFront = pokemon['sprites']['front_default']; */
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    let pokemonSpritFrontString = pokemonSpriteFront.replace(/"/g,'')
    return document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpritFrontString})`;
}

var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
console.log(numPokemonBoxes)
for (let i = 1; i <= numPokemonBoxes; i++) {
    consultarPokemon(i);
}

window.onload = consultarPokemon;
