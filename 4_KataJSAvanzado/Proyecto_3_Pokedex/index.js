const URI = 'https://pokeapi.co/api/v2/pokemon/';

function consultarPokemon(id) {
    fetch(URI+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon));
}

function pokemonImage(pokemon){
    let pokemonOrderNum = pokemon.order;
    // let pokemonSpriteFront = pokemon['sprites']['front_default'];
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    let pokemonSpriteFrontString = pokemonSpriteFront.replace(/"/g,'')
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpriteFrontString})`;
}

function pokemonNumberSearch(){
    var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
    for (let i = 1; i <= numPokemonBoxes; i++) {
        consultarPokemon(i)
    }
}

window.onload = pokemonNumberSearch;