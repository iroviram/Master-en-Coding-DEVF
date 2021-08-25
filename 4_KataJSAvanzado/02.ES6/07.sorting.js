//? SORT
//* Usa el metodo Quick Sort, considerado bastante eficiente en la actualidad.

const frutas = ['manzana','banana','guanabana'];
frutas.sort(); //modifica el arreglo original
console.log(frutas);
// Resultado --> [ 'banana', 'guanabana', 'manzana' ]

const misNumeros = [1,9,5,7,3];
misNumeros.sort();
console.log(misNumeros)
// Resultado --> [ 1, 3, 5, 7, 9 ]

//* Sort ordena de acuerdo al codigo de caracter UNICODE, por eso observamos un orden "raro"

const misNumeros2 = [1,9,5,301,7,10,3];
misNumeros2.sort();
console.log(misNumeros2)
// Resultado --> [ 1, 10, 3, 301, 5,  7, 9]

//* Para solucionar el problema anterior, vamos a pasarle una funcion como para parametro (a,b)

misNumeros2.sort((a,b) => {
    console.log('a:', a);
    console.log('b:', b);
    console.log('-----')
});

// Ahora si para orderlos
misNumeros2.sort((a,b,) => {
    return a-b;
});
console.log("Mis Numeros 2 correctamente ordenados: ", misNumeros2)
misNumeros2.sort((a,b,) => a-b);
console.log("Mis Numeros 2 correctamente ordenados: ", misNumeros2)

//* Que Sucedio?

const misNumeros3 = [1,9,5,301,7,10,3];
misNumeros3.sort((a,b) => {
    console.log('a:', a)
    console.log('b:', b)
    console.log(a-b)
    console.log('-----')
    // No importa el valor en si, revisa mas que nada el signo
    // NEGATIVO: El primer elemento tiene que estar a la izquierda del segundo elemento
    // POSITIVO: El primer elemento tiene que estar a la derecha del segundo elemento
    // 0: Los elementos que se comparan son los mismos
    return a-b;
});

//* CASO PRACTICO DE ORDENAMIENTO CON SORT

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

const personasPorEdad = myArrayPersonas.sort((a,b) => {
    return a.age - b.age;
})
console.log(personasPorEdad)
/* Resultado -->
[
  { name: 'Tamara', age: 24 },
  { name: 'Marth', age: 25 },
  { name: 'Gilberto', age: 28 },
  { name: 'Alfredo', age: 30 }
]
*/