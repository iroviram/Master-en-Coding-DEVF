//? SPREAD OPERATOR CON ARREGLOS
//* EL SPREAD OPERATOR SON LOS TRES PUNTOS ...

const misColores = ['Amarillo','Rojo','Azul'];
const misColoresDos = ['Negro','Blanco', ...misColores];

console.log(misColoresDos)

//* Otra forma de fusionar arreglos
const misColoresTres = ['Amarillo','Rojo','Azul','Verde'];
const misColoresCuatro = ['Negro','Blanco','Gris'];
const misColoresCinco = [...misColoresCuatro, ...misColoresTres];
console.log("Colores 5", misColoresCinco)

//?  SPREAD OPERATOR CON OBJETOS

const myPokemon = {
    id:4,
    name:'Charmander',
    type:'Fuego'
};

const myComplemento = {
    attack:'Mordisco',
    type:'Hielo'
};

const myNewPokemon = {
    ...myPokemon,
    ...myComplemento
};

//*Pasaron 2 cosas:
// 1) El attack no existia en myPokemon, pero si en myComplemento, por lo que se anadio.
// 2) Como type, ya existia, el valor de myPokemon 'plancha' o suple el valor de myPokemon.

console.log(myNewPokemon)