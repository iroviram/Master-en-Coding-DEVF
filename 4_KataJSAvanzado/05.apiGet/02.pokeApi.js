//? POKEAPI
// https://pokeapi.co
//? ENDPOINTS
// https://pokeapi.co/api/v2/pokemon/

//* #1 Traigo a Request

const request = require('request');

//* #2 Declaro mi URI de mi API

const URI = 'https://pokeapi.co/api/v2/pokemon/';

// Funcion que pida un Pokemon y me devuelva sus tipos
function getPokemonTypeByName(name){
    // Es buena practica revisar si la API es sensible a mayusculas/minusculas
    // La pokeapi no lo es, y podriamos usar un lowercase para el nombre
    request.get(URI+name, function (error, response, body) {
        // Si peticion es exitosa, devuelveme la data
        if(response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            //console.log(bodyEnFormatoJSON);
            const typePokemon = bodyEnFormatoJSON.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${name} es:`, typePokemon)
        } else {
            // Si el codigo de estado es cualquier otro, muestrame el mensaje de error
            // console.log("Ocurrio un error:",error)
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}

getPokemonTypeByName("pikachu".toLowerCase());
getPokemonTypeByName("charmander".toLowerCase());
getPokemonTypeByName("squirtle".toLowerCase());
getPokemonTypeByName("oshawott".toLowerCase());