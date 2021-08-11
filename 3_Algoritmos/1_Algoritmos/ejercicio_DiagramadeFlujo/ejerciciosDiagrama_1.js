/*
REALICE UN DIAGRAMA DE FLUJO, PSEUDOCÓDIGO Y CÓDIGO PARA LOS SIGUIENTES
PROBLEMAS

Ejercicio 1
-------------------------------------------------------
|Almacenen 3 números en 3 variables A, B y C.         |
|deseamos saber cual es el mayor y cual es el menor   |
-------------------------------------------------------
*/

/* var A = 3;
var B = 2;
var C = 1; */

var A = window.prompt("Asigna un valor numero a A");
var B = window.prompt("Asigna un valor numero a B");
var C = window.prompt("Asigna un valor numero a C");

if (A > B && A > C) {
    console.log("A es el mayor")
    if (B < C) {
        console.log("B es el menor")
    } else {
        console.log("C es el menor")        
    }
} else if (B > A && B > C) {
    console.log("B es el mayor")
    if (A < C) {
        console.log("A es el menor")
    } else {
        console.log("C es el menor")        
    }
} else {
    console.log("C es el mayor")
    if (A < B) {
        console.log("A es el menor")
    } else {
        console.log("B es el menor")        
    }
}