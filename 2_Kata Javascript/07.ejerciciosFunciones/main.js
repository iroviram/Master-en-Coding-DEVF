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
    var gradosCentigrados = prompt("Convierte grados Centigrados a Fahrenheit.\nIngresa cantidad de grados Centigrados:")
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
    var numeroMultiplicar = prompt("Ingresa el numero del que quieras ver su tabla de multiplicar: ")
    
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
numUser = prompt("Ingresa hasta que numero se contara: ");
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
numUser = prompt("Ingresa hasta que numero se contara: ");
numNaturalesB(numUser);

document.write("<br><br>")

/*------------------------------------------------
|5.-  Escriba una función para ingresar        |
|    cualquier letra del alfabeto y verifique  |
|     si es vocal o consonante                 |
------------------------------------------------*/

document.write("Ejercicio 6. Vocal o Consonante")
document.write("<br>")

function tipoLetra() {
    var letra = prompt("Ingresa una letra y te diremos si es vocal o consonante:")
    document.write(typeof element == "number")
}

document.write("<br><br>")

/*----------------------------------------------
|6.- Escriba una función donde solicite un    |
| número al usuario y me calcule su factorial |
----------------------------------------------*/

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