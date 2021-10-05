//? REGULAR EXPRESSION - REGEX / REGEXP
//* Sirve para buscar patrones de texto

//* Formas de Escribir un RegExpc

const miPrimerRegex = new RegExp('abc'); // Forma 1 de declaracion
const miSegundoRegex = /abc/; // Forma 2 de declaracion

//* Aplicar RegExp previamente declarados con funcion .test(StringAEvaluar)

const miString = 'abcdefgh';
const miString2 = 'acbdefgh';

console.log(miPrimerRegex.test(miString)) //true
console.log(miSegundoRegex.test(miString)) //true
console.log(miPrimerRegex.test(miString2)) //false
console.log(miSegundoRegex.test(miString2)) //false

//* Podemos combinar RegExp con Replace

console.log(miString.replace(miSegundoRegex,'ABC')) // ABCdefgh

const texto = 'Hola mundo desde mi mundo';
console.log(texto.replace('mundo','TIERRA'))

// Ahora voy a reemplazar usando REGEXP
const texto2 = 'Hola mundo desde mi mundo';
const miOtroRegex = /mundo/;
console.log(texto2.replace(miOtroRegex,'TIERRA'))

//* Si quiero reemplazar TODAS las coincidencias, necesito anadir la flag g de Busqueda Global

const miOtroRegex2 = /mundo/g;
const texto3 = 'Hola mundo desde mi mundo';
console.log(texto3.replace(miOtroRegex2,'TIERRA'))
//  Resultado -- > Hola TIERRA desde mi TIERRA

//* Probando CASO PRACTICO, validar un correo.
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log('Correo Caso 1 ', emailRegex.test('cesar@cesarguerra.mx'));