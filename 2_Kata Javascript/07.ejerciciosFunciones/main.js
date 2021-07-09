/*--------------------------------------------------------
| 1.- Hacer una función que convierta de grados   |
|   centígrados a Farenheit                                        |
-----------------------------------------------------------*/
/*
Ejemplo: convierte 37º C a Fahrenheit.
Multiplica los grados Centígrados por 9/5.
Súmale 32º para adaptar el equivalente en la escala Fahrenheit.
                                                      */

document.write("Ejercicio 1. Convierte grados Centigrados a Fahrenheit")
document.write("<br>")

function gradosFahrenheit (){
    var gradosCentigrados = prompt("Ejercicio 1.\nConvierte grados Centigrados a Fahrenheit.\nIngresa cantidad de grados Centigrados:")
    var convertidorF = (gradosCentigrados * 9/5) + 32;
    document.write(`${gradosCentigrados} grados Centigrados equivale a ${convertidorF} grados Fahrenheit`)
}
gradosFahrenheit();



document.write("<br><br>")
/*----------------------------------------------------
|2.- Hacer una función que muestre la tabla de |
| multiplicar de un número                                   |
-------------------------------------------------------- */

document.write("Ejercicio 2. Tabla de Multiplicar")
document.write("<br>")

function tablaMultiplicar (){
    var numeroMultiplicar = prompt("Ejercicio 2.\nIngresa el numero del que quieras ver su tabla de multiplicar: ")
    
    for (var index = 0; index < 10; index++) {
           document.write(`${numeroMultiplicar} x ${index} = ${numeroMultiplicar * index}`+"<br>")     
    }
}
tablaMultiplicar();

document.write("<br><br>")

/*---------------------------------------------
|3.- Escribe una función que imprima todos   |
|     los números naturales de 1 hasta n     |
---------------------------------------------*/

document.write("Ejercicio 3. Numeros Naturales")
document.write("<br>")

function numNaturales(numUser) {
    i = 1;
    while (i <= numUser) {
        document.write(i+"<br>")
        i++;
    }

}
numUser = prompt("Ejercicio 3.\nIngresa hasta que numero se contara: ");
numNaturales(numUser);

document.write("<br><br>")

/*---------------------------------------------
|4.- Escribe una función que imprima todos  |
|     los números naturales en reversa,     |
|     desde n hasta 1.                      |
---------------------------------------------*/

document.write("Ejercicio 4. Numeros Naturales en Reversa")
document.write("<br>")

function numNaturalesB(numUser) {
    for (var i = numUser; i >= 1; i--) {
        document.write(i+"<br>")
    }
}
numUser = prompt("Ejercicio 4.\nIngresa hasta que numero se contara: ");
numNaturalesB(numUser);

document.write("<br><br>")

/*------------------------------------------------
|5.-  Escriba una función para ingresar        |
|    cualquier letra del alfabeto y verifique  |
|     si es vocal o consonante                 |
------------------------------------------------*/

document.write("Ejercicio 5. Vocal o Consonante")
document.write("<br>")

function tipoLetra(letra) {
    var vocal = ["a","i","u","e","o","A","I","U","E","O"]
    var consonante = true;
    for (var i = 0; i < vocal.length; i++) {
        if (letra == vocal[i]){
            document.write(`Tu letra ${letra} es una vocal`)
            consonante = false;
        }
    }   if (consonante) {
        document.write(`Tu letra ${letra} es una consonante`)
    } 
}
var letra = prompt("Ejercicio 5.\nIngresa una letra y te diremos si es vocal o consonante:")
tipoLetra(letra);

document.write("<br><br>")

/*----------------------------------------------
|6.- Escriba una función donde solicite un    |
| número al usuario y me calcule su factorial |
----------------------------------------------*/

document.write("Ejercicio 6. Calcular Factorial")
document.write("<br>")

function factorial(numUser7) {
    var total = 0;
    for (var i = 0; i <= numUser7; i++) {
        total = total + i;
    }
    return total;
}

var numUser7 = prompt("Ejercicio 6.\nIngresa una numero y te calcularemos su factorial:")
factorial(numUser7);
document.write(`El Factorial de ${numUser7} es ${factorial(numUser7)}`);

document.write("<br><br>")
/*--------------------------------------------
|7.-  Leer un arreglo de enteros y sacar su   |
|    media y promedio                         |
----------------------------------------------*/
var enteros = [args];


document.write("<br><br>")
/*---------------------------------------------
|8.- Mostrar los primeros 10 dígitos de la   |
|    serie Fibbonacci                        |
---------------------------------------------*/