import axios from 'axios';
import 'bootstrap';
import Pokedex from './pokedex';

function init(){ //App Start
    //Solicitar los datos de los Pokemon
    const pokemonCount = 10;
    const URI = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0'`;
    axios.get(URI)
        .then((response)=>{
            console.log("Status Code:", response.status);
            //La data esta en: response.data.results
            console.log("La Data es:", response.data.results);
            const pokedex = new Pokedex(response.data.results)
        }).catch((error)=>{
            console.log("Error:",error);
        })
}

init();