//? ARREGLOS - MAP Y FILTER

const myArray = [1,2,3,4,5,6];

//* Ejemplo: Necesito sacar el cuadrado de cada numero de myArray
//* Forma Tradicional con FOR

const arrayCuadrado = [];

for (let i=0; i < myArray.length; i++){
    const numero = myArray[i];
    arrayCuadrado.push(numero**2);
}

console.log("El cuadrado de mis numeros es: ",arrayCuadrado)
// Resultado --> El cuadrado de mis numeros es:  [ 1, 4, 9, 16, 25, 36 ]

//? MAP
//* Lo anterior se puede simplificar con el uso de MAP
//* Puedo procesar un arreglo y me devuelve uno nuevo ya modificado

const arrayCuadrado2 = myArray.map((numero)=>{
    //*Con MAP siempre debo retornar un valor
    return numero**2;
})
console.log("El cuadrado de mis numeros con MAP es: ",arrayCuadrado2)
// Resultadp --> El cuadrado de mis numeros con MAP es:  [ 1, 4, 9, 16, 25, 36 ]

//? FILTER
//* Filter devuelve un nuevo array con los elementos que cumplan ciertas condiciones (LOS FILTRA - literal)

//* Los numeros que sean multiplos de 2
const multiplos = myArray.filter((numero)=>{
    const data = (numero%2 === 0) ? numero : null;
    return data; // Siempre debo retornar un valor
});
console.log("Los numeros multiplos de 2 con Filter son: ",multiplos)
// Resultado --> Los numeros multiplos de 2 con Filter son:  [ 2, 4, 6 ]

//? FIND
//* Busca dentro del arreglo y regresa la PRIMER coincidencia
const numeroEncontrado = myArray.find((numero)=>{
    return numero === 5;
});
console.log("Encontre el numero: ",numeroEncontrado)

//? Ejemplo Practico

const myArrayPersonas = [
    {
        name: 'Alfredo',
        age: 30
    },
    {
        name: 'Gilberto',
        age: 28
    },
    {
        name: 'Marth',
        age: 25
    },
    {
        name: 'Tamara',
        age: 24
    },
];

const myArrayFiltered = myArrayPersonas.filter((person)=>{
    return person.age >= 25;
})
console.log('Solo filtro personas >= 25 anios', myArrayFiltered)

const myArrayMapped = myArrayPersonas.map((person)=> person.name);
//* Como uso una sola linea, puedo omotir las {} y el return de la funcion flecha
console.log('Map de Nombres:', myArrayMapped)
// Resultado -- > Map de Nombres: [ 'Alfredo', 'Gilberto', 'Marth', 'Tamara' ]

//* Lo anterior se uede realizar con una sola constante usando CADENAS

// const myArrayAll = myArrayPersonas.filter((person)=> person.age >=25).map((person)=> person.name);

//* Para facilidad de lectura, se puede colocar cada "cadena" en una linea diferente.
const myArrayAll = myArrayPersonas
    .filter((person)=> person.age >=25)
    .map((person)=> person.name);

console.log("Filter y Map Encadenados: ", myArrayAll)
// Resultado --> Filter y Map Encadenados:  [ 'Alfredo', 'Gilberto', 'Marth' ]
