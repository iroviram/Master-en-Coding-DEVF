//Ejercicios Básicos Arreglos

/*

Ejercicio 1

Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
*/

var numerosAzar = [];
var index = 0;
/* var azar = Math.floor(Math.random() *100);
console.log(azar); */

while (index<10){
    numerosAzar.push(Math.floor(Math.random()*100));
    index++;
}
console.log(numerosAzar)

/*

Ejercicio 2

El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

*/

var variasPalabras = prompt("Ingresa 5 palabras separadas por coma:")

var variasPalabrasArray = variasPalabras.split(',');
console.log(variasPalabrasArray);


/*

Ejercicio 3

De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

*/

var numArray = [10,40,30,20,15,5];
numArray.sort(function(a, b) {
    return a - b;
});
console.log(numArray);

numArray.sort((a, b) => a - b); // For ascending sort
console.log(numArray);
numArray.sort((a, b) => b - a); // For descending sort
console.log(numArray);

function compareNumbers(a, b)
{
    return a - b;
}
numArray.sort(compareNumbers);
console.log(numArray);


// Ejercicios Básicos Estructuras de Control (While)

/*

Ejercicio 4

Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 

*/


var num = parseInt(prompt("¿Teclea un número?"));
console.log("Número tecleado: ", num)
var multiplo5 = [];
i=1
while (i<=num) {
    if(i%5 == 0) {
        multiplo5.push(i);
    }
    i++;
}
console.log("Los siguientes numeros son multiplos de 5: " + multiplo5);


/*

Ejercicio 5

Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
*/

var num1 = parseInt(prompt("Teclea dos numeros entre 1 y 50.\nCual es el primer numero?"));
console.log("Tu primer numero es: " + num1);
var num2 = parseInt(prompt("Cual es el segundo numero?"));
console.log("Tu primer numero es: " + num2);

var i = 1;
while (i < 51){
    console.log(i);
    if(i==num1 || i==num2){
        console.log(" ¡Lotería!");
    }
    i++;
}

/*

Ejercicio 6

Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
 */

var arregloPalabras = [];
var userInput;
while (!(userInput=="")){
    userInput = prompt("Ingresar cualquier letra o palabras: ");
    arregloPalabras.push(userInput);
}

console.log("Introduciste estas letras y palabras: " + arregloPalabras.join(" "));