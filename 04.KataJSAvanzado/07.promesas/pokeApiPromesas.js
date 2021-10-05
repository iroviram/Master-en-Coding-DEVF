//? POKEAPI
// https://pokeapi.co
//? ENDPOINTS
// https://pokeapi.co/api/v2/pokemon/

//* #1 Traigo a Request

const request = require('request');

//* #2 Declaro mi URI de mi API

const URI = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemonTypeByName(name){
    request.get(URI+name, function (error, response, body) {
        if(response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            //console.log(bodyEnFormatoJSON);
            const typePokemon = bodyEnFormatoJSON.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${name} es:`, typePokemon)
        } else {
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}

//? LA PROMESA

function getPokemonByName(name){
    return new Promise((resolve,reject)=>{
        request.get(URI+name, function (error, response, body) {
            if(response.statusCode === 200){
                const bodyEnFormatoJSON = JSON.parse(body);
                // Si la peticion es exitosa, devuelvo el contenido del body en formato de objeto de JS
                resolve(bodyEnFormatoJSON);
            } else {
                // Si el codigo de estado es cualquier otro, RECHAZA la promesa
                reject(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
            }
        });
    });
}

//? EJECUCION DE LA PROMESA - FORMA #1
//* Resolviendo Promesas con .then y .catch
//* Traer los tipos del Pokemon

function getPokemonTypeByNameDos (pokemonName){
    getPokemonByName(pokemonName)
        .then((pokemonData)=>{
            const typePokemon = pokemonData.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${pokemonData.name} es:`, typePokemon)
        })
        .catch((error)=>{
            console.log(error);
        });
}

/* getPokemonTypeByNameDos("pikachu".toLowerCase());
getPokemonTypeByNameDos("charmander".toLowerCase());
getPokemonTypeByNameDos("squirtle".toLowerCase());
getPokemonTypeByNameDos("oshawott".toLowerCase()); */


//? EJECUCION DE LA PROMESA - FORMA #2
//* Resolviendo promesas con Async + Await
// Se implemento en ES7 y se puede usar en Node.js a partir de la v7.10.1
//* Funciona solo dentro de una funcion, porque esta debe ser async
//* Ejemplo: Encontrar las estadisticas del Pokemon con Async + Await

async function getPokemonStatsByName(pokemonName){
    // await sirve para ESPERAR a que se resuelva la promesa
    const pokemonData = await getPokemonByName(pokemonName);
    const stats = pokemonData.stats.map((objeto)=>[objeto.stat.name, objeto.base_stat]);
    console.log(`Las estadisticas de ${pokemonName}`,stats);
}

//getPokemonStatsByName("pikachu");

//* El problema del codigo anterior es que no maneja errores.
//* La forma en que se gestionan los errores con Async + Await
//* Es usando TRY y CATCH

async function getPokemonStatsByNameDos(pokemonName){
    // si funcion cae en RESOLVE
    try{
        const pokemonData = await getPokemonByName(pokemonName);
        const stats = pokemonData.stats.map((objeto)=>[objeto.stat.name, objeto.base_stat]);
        console.log(`Las estadisticas de ${pokemonName}`,stats);
    }catch(err){
        console.log(err);
    }
}

getPokemonStatsByNameDos("pikachu");
getPokemonStatsByNameDos("oshawott");
getPokemonStatsByNameDos("cyndaquil");
getPokemonStatsByNameDos("rowlet");