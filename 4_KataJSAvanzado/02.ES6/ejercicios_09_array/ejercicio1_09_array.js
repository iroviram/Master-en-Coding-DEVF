//? 01. Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. Ej orderWord("webmaster") resultado ---> "abeemrstw"

const palabra = "webmaster";

const orderWord = palabra
    .split("")
    .sort()
    .join("");
console.log(orderWord)