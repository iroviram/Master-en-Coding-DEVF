// Ejercicios Básicos Estructuras de Control (For)

/*  Ejercicio 1

Crea un programa que imprima en consola los números impares del 1 al 50.   
*/

document.write("Ejercicio 1 - Numeros Impares del 1 al 50");
document.write("<br>")

for(var num = 1; num <= 50; num++){
    if (num % 2 != 0){
        document.write(`${num} <br>`);
    }
}

document.write("<br>")

/*  Ejercicio 2

Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
*/

document.write("Ejercicio 2 - Pokemon Multiplos de 5");
document.write("<br>")

var userInput = parseInt(prompt("Ejercicio 2\nIngresa un numero de Pokemon entre 1-150:"));
var isTrue = true;

while(isTrue){
    if (userInput<151){
        console.log("Excelente, aqui estan tus pokemon:");
        isTrue=false;
    }else{
        userInput = parseInt(prompt("Ejercicio 2\nIngresa un numero de Pokemon entre 1-150:"));
    }
}

for(var i = 1; i <= userInput; i++){
    if (i % 5 == 0){
        document.write(`${i}. ${pokemons[i]} <br>`);
    }
}

document.write("<br>")

/* Ejercicio 3

Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.
*/

document.write("Ejercicio 3 - Elementos Tipo Numero en Arreglo [4,”dos”,8,”tres”,5,9,1,”cero”]");
document.write("<br>")

var array = [4,"dos",8,"tres",5,9,1,"cero"];

for (var index = 0; index < array.length; index++) {
    var element = array[index];
    if(typeof element == "number"){
        document.write(`${element}<br>`);
    }
}