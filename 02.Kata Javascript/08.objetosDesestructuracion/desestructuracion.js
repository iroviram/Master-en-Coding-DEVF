//CREACION DE NUESTRO OBJETO
const superheroe = {
    nombre: "Iron Man",
    edad: 29,
    peso: 100,
    empresa: "Marvel"
}

//DE ESTA MANERA IMPLEMENTAMOS LA DESESTRUCTURACION
const {nombre, edad, peso, empresa} = superheroe
console.log(`${nombre} tiene ${edad} anos, pesa ${peso} kg y pertenece a ${empresa}`)

// ESTO NO ES UNA DESESTRUCTURADCION
console.log(`${superheroe.nombre} tiene ${superheroe.edad} anos, pesa ${superheroe.peso} kg y pertenece a ${superheroe.empresa}`)


// EJERCICIO DE DESESTRUCTURACION - CONVERTIR ARREGLO

const pokemonInicial = {
    hierba: "Bulbasaur",
    fuego: "Charmander",
    agua: "Squirtle"
}

const {hierba, fuego, agua} = pokemonInicial
pokemonElegido = prompt(`Escribe cual sera tu pokemon inicial: ${hierba}, ${fuego} o ${agua}`)
document.write(`De acuerdo a tu seleccion, tu Pokemon inicial sera ${pokemonElegido}`)