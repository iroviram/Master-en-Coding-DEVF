//? Manejo de Strings

const myString = "Hola Mundo";


//? -- charAt --
//* charAt -> buscar el caracter en una posicion especifica4

console.log("CharAt Posicion 2:", myString.charAt(2))
console.log("CharAt Posicion 2:", myString.charAt(4))
// Resultado --> CharAt Posicion 2: l

//* Si no le indico una posicion, tomma el primer elemento (0)
console.log("CharAt Posicion x:", myString.charAt())
// Resultado --> CharAt Posicion x: H

//? -- indexOf --
//* Me da el indice del primer caracter encontrado, de izquierda a derecha
console.log("indexOf - El indice de la o:", myString.indexOf("o"))
// Resultado --> El indice la o: 1

//? -- lastIndexOf --
//* Lo mismo que indexOf, pero de derecha a izquierda
console.log("lastIndexOf - El indice de la o:", myString.lastIndexOf("o"))
// Resultado --> lastIndexOf - El indice la o: 9

//? -- Split & Join --
//* Split --> Corta el String cuando encuentra el caracter especificado y genera un arreglo(array) de elemento.
console.log("Split de mi arreglo:", myString.split(" "))
// Resultado --> Split de mi arreglo: [ 'Hola', 'Mundo' ]

//* Split tambien se puede usar para sacar cada caracter de un string en forma de array.
console.log("Split de String en Caracteres: ", "Desarrollador".split(""))
// Resultado --> Split de String en Caracteres:  [  'D', 'e', 's', 'a',  'r', 'r', 'o', 'l',  'l', 'a', 'd', 'o',  'r']

//* Join --> Une los elementos de un arreglo en un string a traves de un caracter definido
const palabras = ["Hola","Soy","Un","String"];
console.log("El Join de mi Arreglo: ",palabras.join(" "))

//? -- Replace y ReplaceAll --
//* Replace --> Busca un texto y reemplaza por la primera ocurrencia
//* Sintaxis string.replace("cadenaABuscar","cadenaConLaQueReemplaza")
console.log("Reemplazo Mundo por a Todos: ", myString.replace("Mundo","a Todos"))
// Resultado --> Reemplazo Mundo por a Todos: Hola a Todos

//* ReplaceAll --> Busca todas las ocurrencias en un texto y las reemplaza
//* Sintaxis string.replaceAll("cadenaABuscar","cadenaConLaQueReemplaza")
const discurso = "Felicitamos al candidato Pepe, por haber ganado las elecciones. Pepe es la esperanza del pueblo";
// console.log("Reemplazo nombre del candidato: ", discurso.replaceAll("Pepe","Jesua"))
// ReplaceAll funciona en ultima especificacion de ECMA, no funciona con versiones anteriores LT de Node

//? -- Includes --
//* Includes --> Busca un texto dentro de otro, devuelve true si lo encuentra y false si no
const oracion = 'Estudiar tecnologia es la mejor inversion que he hecho en mi vida';
const palabra = 'mejor';

console.log("Esta oracion incluye la palabra mejor", oracion.includes(palabra))
console.log(`La palabra "${palabra}" ${oracion.includes(palabra) ? 'esta' : 'no esta'} en la oracion `)
// Resultado --> La palabra "mejor" esta en la oracion

