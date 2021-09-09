const URI = 'https://pokeapi.co/api/v2/pokemon/';

var pokemonCountMax = 3;

function liPokemonCreator() {

    for (let i = 1; i <= pokemonCountMax; i++) {
        var ul = document.getElementById("listaPokemon");
        var li = document.createElement("li");
        ul.appendChild(li);
        var node = ul.getElementsByTagName("li")[i-1];
        node.setAttribute("class", "pokemon-box");
        node.setAttribute("id", `pokemon-${i}`);
        node.setAttribute("onclick","changePokemonBackgroundColor()")
    }
    pokemonNumberSearch(pokemonCountMax);
}

/* function changePokemonBackgroundColor() {
        document.getElementById(`lista-pokemon`).style.backgroundColor = "black";
} */
window.onload = liPokemonCreator;

document.documentElement.style.setProperty('--some-color-pokemon', 'red');

function pokemonImage(pokemon){
    
    let pokemonOrderNum = pokemon.id;
    let pokemonSpriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonOrderNum}.png`
    let pokemonSpriteFrontString = pokemonSpriteFront.replace(/"/g,'')
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpriteFrontString})`;
}

function consultarPokemon(id) {
    fetch(URI+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon));
}

function pokemonNumberSearch(pokemonCountMax){
    for (let i = 1; i <= pokemonCountMax; i++) {
        consultarPokemon(i)
    }
}